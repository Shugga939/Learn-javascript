// null

//----
// выведет Вася

//------
//выведет undefined

//------
askPassword(user.loginOk.bind(user), user.loginFail.bind(user))

//-----
askPassword(user.login.bind(user, true), user.login.bind(user, false))