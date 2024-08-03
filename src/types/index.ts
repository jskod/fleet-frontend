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

export interface TrackingReport {
  hoursOperated: number;
  totalDistance: number;
  averageSpeed: number;
  maxSpeed: number;
  averageTirePressure: {
    frontLeft: number;
    frontRight: number;
    rearLeft: number;
    rearRight: number;
  };
  averageBatteryVoltage: number;
  minBatteryVoltage: number;
  alertCount: number;
}
