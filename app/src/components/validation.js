export default function validation(form) {
  let errors = {};
  if (!/\S+@\S+\.\S+/.test(form.email)) {
    errors.email = "email invalido";
  }
  if (!form.email) {
    errors.email = "";
  }
  if (form.password.length < 8) {
    errors.password = "contraseña con poco digitos";
  }
  if (!form.password) {
    errors.password = "";
  }
  return errors;
}
