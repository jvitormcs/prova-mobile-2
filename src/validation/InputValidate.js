import * as yup from 'yup'
export const InputValidation = yup.object().shape({

    valueReal: yup.number().required('este campo não pode ficar vazio')

})