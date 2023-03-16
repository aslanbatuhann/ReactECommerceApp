import * as yup from 'yup';

const validations = yup.object().shape({
    email: yup.string().email('Geçerli E-mail giriniz.').required('Zorunlu alan.'),
    password: yup.string().min(5, 'Şifre en az 5 karakter olmalıdır.').required('Zorunlu alan.'),
    passwordConfirm: yup.string().oneOf([yup.ref('password')], 'Parolanız uyuşmuyor.').required('Zorunlu alan.')
});

export default validations;