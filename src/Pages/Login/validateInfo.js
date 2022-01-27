export default function validateInfo(values) {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = 'İstifadəçi adını yazın';
  }

  if (!values.email) {
    errors.email = 'Email adresinizi yazın';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email adresi düzgün deyil';
  }
  if (!values.password) {
    errors.password = 'Şifrəni yazın';
  } else if (values.password.length < 6) {
    errors.password = 'Şifrədə ən az 6 simvol olmalıdır';
  }

  if (!values.password2) {
    errors.password2 = 'Şifrəni yazın';
  } else if (values.password2 !== values.password) {
    errors.password2 = 'Şifrə düzgün deyil';
  }
  return errors;
}
