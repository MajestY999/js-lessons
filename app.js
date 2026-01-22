//Упражнение - упраление this

const user = {
  login: 'example@mail.com',
  password: '12345'
};

function removePassword(reset) {
  if (reset) {
    this.password = undefined;
  } else {
    this.password = "1";
  }
}

const resetPasswordUser =  removePassword.bind(user)
resetPasswordUser(true)
console.log(user);