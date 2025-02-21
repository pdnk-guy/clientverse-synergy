
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useToast } from "@/hooks/use-toast";

type FocusType = 'client' | 'request' | 'analytics' | null;

interface Notification {
  id: string;
  title: string;
  message: string;
  timestamp: Date;
}

interface FocusContextType {
  focusMode: boolean;
  focusType: FocusType;
  missedNotifications: Notification[];
  focusTimer: number | null;
  setFocusMode: (value: boolean) => void;
  setFocusType: (type: FocusType) => void;
  startFocusTimer: (minutes: number) => void;
  clearFocusTimer: () => void;
}

const FocusContext = createContext<FocusContextType | undefined>(undefined);

export function FocusProvider({ children }: { children: React.ReactNode }) {
  const [focusMode, setFocusMode] = useState(false);
  const [focusType, setFocusType] = useState<FocusType>(null);
  const [missedNotifications, setMissedNotifications] = useState<Notification[]>([]);
  const [focusTimer, setFocusTimer] = useState<number | null>(null);
  const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);
  const { toast } = useToast();

  const startFocusTimer = (minutes: number) => {
    setFocusTimer(minutes * 60);
    const id = setInterval(() => {
      setFocusTimer(prev => {
        if (prev === null) return null;
        if (prev <= 1) {
          clearInterval(id);
          setFocusMode(false);
          toast({
            title: "Фокус-режим завершен",
            description: "Время фокусировки истекло",
          });
          return null;
        }
        return prev - 1;
      });
    }, 1000);
    setTimerId(id);
  };

  const clearFocusTimer = () => {
    if (timerId) {
      clearInterval(timerId);
      setTimerId(null);
    }
    setFocusTimer(null);
  };

  useEffect(() => {
    if (!focusMode) {
      clearFocusTimer();
      if (missedNotifications.length > 0) {
        toast({
          title: "Пропущенные уведомления",
          description: `У вас ${missedNotifications.length} непрочитанных уведомлений`,
        });
      }
    }
  }, [focusMode]);

  return (
    <FocusContext.Provider
      value={{
        focusMode,
        focusType,
        missedNotifications,
        focusTimer,
        setFocusMode,
        setFocusType,
        startFocusTimer,
        clearFocusTimer,
      }}
    >
      {children}
    </FocusContext.Provider>
  );
}

export function useFocus() {
  const context = useContext(FocusContext);
  if (context === undefined) {
    throw new Error('useFocus must be used within a FocusProvider');
  }
  return context;
}
