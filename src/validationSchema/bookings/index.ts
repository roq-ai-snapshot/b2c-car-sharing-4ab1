import * as yup from 'yup';

export const bookingValidationSchema = yup.object().shape({
  start_time: yup.date().required(),
  end_time: yup.date().required(),
  billing: yup.string().nullable(),
  guest_id: yup.string().nullable().required(),
  car_id: yup.string().nullable().required(),
});
