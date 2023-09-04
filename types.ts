export type Deferrals = {
  defer: () => void;
  update: (message: string) => void;
  presentCard: (card: object|string, callback: (data: object, rawData: string) => void) => void;
  done: (failureReason?: string) => void;
};