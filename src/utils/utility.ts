

export const isValidEmail = (email: string) => {
  const emailRegex = /^[a-zA-Z0-9]([-_.]?[a-zA-Z0-9]+)*@[a-zA-Z0-9]([-_.]?[a-zA-Z0-9]+)*\.[a-zA-Z]{2,4}$/;
  if (emailRegex.test(email)){
    return '';
  }
  return '이메일이 정확하지 않습니다.'
};

export const isValidPhoneNumber = (phoneNumber: string) => {
  const formattedNumber = phoneNumber.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
  const phoneNumberRegex = /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/;

  if (phoneNumberRegex.test(formattedNumber)){
    return true
  }
  return false;
};

export const activateJoinButton = (id:string,name:string,nickname:string,password:string) => {
  if (id.length>=1 && name.length>=1 && nickname.length>=1 && password.length>=6) {
    return true
  }
  return false;
}
export const isValidPhoneOrEmail =  (input: string) => {
  return isValidPhoneNumber(input) && isValidEmail(input);
}
export const isValidName = (name:string) => {
  return (name.length>=1);
}
export const isValidId = (id:string) => {
  const regex = /^[a-zA-Z0-9_.]+$/;

  if (regex.test(id)) {
    return true;
  }
  return false;
}
export const isValidPassword = (password:string) => {
  if(password.length>=6) {
    return true;
  }
  return false;
}
export const isCanLogin = (id:string,password:string) => {
  if(id.length>=1 && password.length>=6) {
    return true;
  }
  return false;
}
export const years: number[] = [];
for (let year = 2021; year >= 1919; year--) {
  years.push(year);
}

// 월 배열: 1부터 12까지
export const months: number[] = Array.from({ length: 12 }, (_, index) => index + 1);

// 일 배열: 1부터 31까지
export const days: number[] = Array.from({ length: 31 }, (_, index) => index + 1);

export const changeBirthtoNumber = (birth:string) => {
  const bitrharr = birth.split('-');
  return bitrharr;
}
export const isValidBirth = (year: number, month: number, day: number) => {
  if ((1919 <= year && year <= 2015) && (1 <= month && month <= 12) && (1 <= day && day <= 31)) {
    return true;
  }
  return false;
}

/*export const saveLoginInfo = (loginInfo: UserInfo) => {
  window.localStorage.setItem(
    process.env.REACT_APP_LOGIN_INFO ?? "",
    JSON.stringify(loginInfo) ?? ""
  );
};

export const clearLoginData = () => {
  window.localStorage.removeItem(process.env.REACT_APP_LOGIN_INFO ?? "");
};

export const getLoginInfoUserName = (): string => {
  const loginInfo: UserInfo = JSON.parse(
    window.localStorage.getItem(process.env.REACT_APP_LOGIN_INFO ?? "") ?? ""
  );
  return loginInfo.name ?? "";
};

export const getLoginInfoJwt = () => {
  const loginInfo = JSON.parse(
    window.localStorage.getItem(process.env.REACT_APP_LOGIN_INFO ?? "") ?? ""
  );
  return loginInfo.jwt ?? "";
};*/
