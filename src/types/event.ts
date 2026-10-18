export interface CommunityEvent {
  id: string;
  created_at: string;
  title: string;
  description: string | null;
  date_time: string;
  location: string;
  event_type: 'Cultural' | 'Sports' | 'Social' | 'Other';
  created_by: string;
}