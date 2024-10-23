export const statemanager: Record<string, { state: string }> = {};
export const rooms: Record<
  string,
  {
    teamRed: { players: { id: string; name: string }[]; points: number };
    teamBlue: { players: { id: string; name: string }[]; points: number };
  }
> = {};
