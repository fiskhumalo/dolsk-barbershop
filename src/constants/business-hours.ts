// Business operating hours for Dolsk Barbershop
// Used by the booking system to determine available slots

export interface DaySchedule {
  open: boolean; // Is the shop open this day?
  openTime: string; // Opening time (24hr format)
  closeTime: string; // Closing time (24hr format)
}

// 0 = Sunday, 1 = Monday, ..., 6 = Saturday
export const businessHours: Record<number, DaySchedule> = {
  0: { open: false, openTime: "", closeTime: "" }, // Sunday — CLOSED
  1: { open: true, openTime: "08:00", closeTime: "18:00" }, // Monday
  2: { open: true, openTime: "08:00", closeTime: "18:00" }, // Tuesday
  3: { open: true, openTime: "08:00", closeTime: "18:00" }, // Wednesday
  4: { open: true, openTime: "08:00", closeTime: "18:00" }, // Thursday
  5: { open: true, openTime: "08:00", closeTime: "18:00" }, // Friday
  6: { open: true, openTime: "08:00", closeTime: "14:00" }, // Saturday
};

// Generate time slots between open and close time
// slotDuration = minutes between each slot (e.g., 30 means 08:00, 08:30, 09:00...)
export function getTimeSlotsForDay(dayOfWeek: number, slotDuration: number = 60): string[] {
  const schedule = businessHours[dayOfWeek];

  // If closed, return empty array — no slots available
  if (!schedule.open) return [];

  const slots: string[] = [];
  const [openHour, openMin] = schedule.openTime.split(":").map(Number);
  const [closeHour, closeMin] = schedule.closeTime.split(":").map(Number);

  let currentHour = openHour;
  let currentMin = openMin;

  // Keep adding slots until we reach closing time
  while (
    currentHour < closeHour ||
    (currentHour === closeHour && currentMin < closeMin)
  ) {
    // Format as "08:00", "09:00", etc.
    const timeStr = `${String(currentHour).padStart(2, "0")}:${String(currentMin).padStart(2, "0")}`;
    slots.push(timeStr);

    // Move to next slot
    currentMin += slotDuration;
    if (currentMin >= 60) {
      currentHour += Math.floor(currentMin / 60);
      currentMin = currentMin % 60;
    }
  }

  return slots;
}

// Day names for display
export const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
