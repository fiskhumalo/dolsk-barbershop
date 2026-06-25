export interface DaySchedule {
  open: boolean;
  openTime: string;
  closeTime: string;
}

// 0 = Sunday, 1 = Monday, ..., 6 = Saturday
export const businessHours: Record<number, DaySchedule> = {
  0: { open: false, openTime: "", closeTime: "" },
  1: { open: true, openTime: "08:00", closeTime: "18:00" },
  2: { open: true, openTime: "08:00", closeTime: "18:00" },
  3: { open: true, openTime: "08:00", closeTime: "18:00" },
  4: { open: true, openTime: "08:00", closeTime: "18:00" },
  5: { open: true, openTime: "08:00", closeTime: "18:00" },
  6: { open: true, openTime: "08:00", closeTime: "14:00" },
};

export function getTimeSlotsForDay(dayOfWeek: number, slotDuration: number = 60): string[] {
  const schedule = businessHours[dayOfWeek];
  if (!schedule.open) return [];

  const slots: string[] = [];
  const [openHour, openMin] = schedule.openTime.split(":").map(Number);
  const [closeHour, closeMin] = schedule.closeTime.split(":").map(Number);

  let currentHour = openHour;
  let currentMin = openMin;

  while (
    currentHour < closeHour ||
    (currentHour === closeHour && currentMin < closeMin)
  ) {
    const timeStr = `${String(currentHour).padStart(2, "0")}:${String(currentMin).padStart(2, "0")}`;
    slots.push(timeStr);

    currentMin += slotDuration;
    if (currentMin >= 60) {
      currentHour += Math.floor(currentMin / 60);
      currentMin = currentMin % 60;
    }
  }

  return slots;
}

export const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
