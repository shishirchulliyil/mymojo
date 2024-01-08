export type Analysis = {
  createdAt: Date;
  updatedAt: Date;
  mood: string;
  subject: string;
  summary: string;
  color: string;
  negative: boolean;
  sentimentScore: number;
};

export type Entry = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
  content: string;
  analysis: Analysis | null;
};
