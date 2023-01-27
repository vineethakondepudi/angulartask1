export class Userservice{
users=[{name:"vineetha",skillset:"angular"},
{name:"koti",skillset:"javascript"},
{name:"sai",skillset:"javascript"},
{name:"prasanna",skillset:"angular"}]
AddNewUser(name:string,skillset:string){
this.users.push({name:name, skillset:skillset})
}
}