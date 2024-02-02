const AppRoute = {
  chat: "",
  chat_user: (user_id: string) => `/?chat_id=${user_id}`,
  login: "login",
};

export default AppRoute;
