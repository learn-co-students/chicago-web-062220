
const foo = {
  bar: function(){
    console.log(this)
  }
}



const newVar = foo.bar



foo.bar()
console.log('------');

newVar()




var emailObj = {
    provider: 'gmail.com',
    usernames: [ 'mike', 'john', 'nina' ],
    getEmails: function() {
        this.usernames.map( function( username ){
            console.log(username + '@' + this.provider)
        } );
    }
};

emailObj.getEmails()
