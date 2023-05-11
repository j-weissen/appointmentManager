import {Customer} from '@/models/customer.ts';


export interface Appointment {
  id: number;
  title: string;
  start: Date;
  end: Date;
  customer: Customer;
}  
