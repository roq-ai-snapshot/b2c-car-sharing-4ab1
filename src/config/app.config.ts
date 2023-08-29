interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Owner', 'Fleet Manager', 'Admin'],
  tenantName: 'Company',
  applicationName: 'B2C Car sharing v2',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['View available cars.', 'Create a new booking.', 'Cancel a booking.', 'Update booking details.'],
  ownerAbilities: [
    'Manage Companies',
    'Invite Fleet Managers and Admins',
    'Manage Users',
    'Manage Cars',
    'View available Cars',
    'Manage Bookings',
  ],
};
