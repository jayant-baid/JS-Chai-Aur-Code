const User={
    _email: 'jb@yt.com',
    _password:'abc',

    get email(){
        return this._email.toUpperCase();
    },
    set email(value){
        this._email=value;
    }
}

//             Factory Func
const jb = Object.create(User);
console.log(jb) // {}
// Because, _email, _password hardcode ki h
console.log(jb.email)

const tea = Object.create(User);
tea.email='tea@tea.co'
console.log(tea) // { _email: 'tea@tea.co' }
console.log(tea.email)
// tea ke andar value show ho rhi h because humne email set ki h, so it gets updated

/*
getter setter humne method banaya h, but we use this as property
getter setter usse method nhi rhne deta, woh special methods h, jisse property ke upar rkhta h
get set memory se lekar aata h ya fir write karta h property ko/me
*/