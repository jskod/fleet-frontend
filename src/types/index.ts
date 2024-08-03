export interface Vehicle {
  _id: string;
  vin: string;
  model: string;
  type: string;
  status: string;
  createdAt: string;
}

export interface MaintenanceLog {
  _id: string;
  vehicleId: string;
  description: string;
  date: string;
  cost: number;
  performedBy: string;
  mileageAtService: number;
}
