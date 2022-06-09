$(document).ready(function(){
   
var children = ["Kids", "The youth", "Minors"]
var continually = ["often", "repeatedly", "frequently"]
var corrupt = ["evil", "unethical", "dishonest", "immoral", "reprobate"]
var government = ["country", "nation"]
 
 
var sentence1 = `${children[Math.floor(Math.random()*children.length)]} are ${continually[Math.floor(Math.random()*continually.length)]} dying at the hands of our ${corrupt[Math.floor(Math.random()*corrupt.length)]} ${government[Math.floor(Math.random()*government.length)]} and politicians who continually cash in their checks from the NRA`


// They don't even bat an eye when a major school shooting occurs and push it off with “thoughts and prayers''.

var major = ["catastrophic", "massive"]
var occurs = ["happens", "ensues", "transpires", "appears", "emerges", "arises"]


var sentence2 = `They don't even bat an eye when a ${major[Math.floor(Math.random()*major.length)]} school shooting ${occurs[Math.floor(Math.random()*occurs.length)]} and push it off with “thoughts and prayers"`

// Well, guess what, that does not do shit. We are tired of seeing schools go through the worst and seeing politicians continue to do nothing. It's time to change this no matter what way possible. 


var sentence3 = `Well, guess what, that does not do shit. We are tired of seeing schools go through the worst and seeing politicians continue to do nothing. It's time to change this no matter what way possible`

  
// While they get to go on their lavish trips and shopping sprees, we as the youth of America hide under our desks and hope we aren’t the next target. 

var lavish = ["luxury", "luxuorious", "grand", "extravagent", "elegant"]
var youth = ["kids", "children"]

var sentence4 = `While they get to go on their ${lavish[Math.floor(Math.random()*lavish.length)]} trips and shopping sprees, we as the ${youth[Math.floor(Math.random()*youth.length)]} of America hide under our desks and hope we aren’t the next target`




// We demand that you take charge and sign legislation for stronger gun control. 
var demand = ["request", "solicit", "summon", "require", "call for", "challenge", "order"]
var charge = ["control", "account"]
var sign = ["inscribe"]
var stronger = ["stricter", "more intensive", "more"]

var sentence5 = `We ${demand[Math.floor(Math.random()*demand.length)]} that you take ${charge[Math.floor(Math.random()*charge.length)]} and ${sign[Math.floor(Math.random()*sign.length)]} legislation for ${stronger[Math.floor(Math.random()*stronger.length)]} gun control`


// The lack of not taking charge signifies that you are no better than those who use their checks from the NRA.

var lack = ["absence"]
var signifies = ["means", "represents", "symbolizes", "conveys", "indicates"]
var sentence6 = `The ${lack[Math.floor(Math.random()*lack.length)]} of not taking charge ${signifies[Math.floor(Math.random()*signifies.length)]} that you are no better than those who use their checks from the NRA`


// Many of you state that you side with us, but in reality never keep true to your promises and only support gun control as a mechanism to garner more votes. 
var state = ["say", "comment", "note", "remark", "declare", "express", "word"]
var promises = ["commitments", "pledges", "oaths", "arruances", "guarantees"]
var mechanism = ["means", "tool", "agency", "intrument"]


var sentence7 = `Many of you ${state[Math.floor(Math.random()*state.length)]} that you side with us, but in reality never keep true to your ${promises[Math.floor(Math.random()*promises.length)]} and only support gun control as a ${mechanism[Math.floor(Math.random()*mechanism.length)]} to garner more votes`


// We know who you are. Do better or leave. Keep in mind that the midterm elections are coming up so if you want that special seat this is the time to prove yourself. 

var sentence8 = `We know who you are. Do better or leave. Keep in mind that the midterm elections are coming up so if you want that special seat this is the time to prove yourself`


// You are elected by us, we expect you to follow through with what you say. 

var sentence9 = `You are elected by us, we expect you to follow through with what you say`


// If you truly care about the future of this nation and its children who will inherit it, then you know what must be done. 

var truly = ["really", "actually"]
var future = ["fate", "destiny", "tomorrow"]
var nation = ["country"]
var children = ["Kids", "The youth", "Minors"]

var sentence10 = `If you ${truly[Math.floor(Math.random()*truly.length)]} care about the ${future[Math.floor(Math.random()*future.length)]} of this ${nation[Math.floor(Math.random()*nation.length)]} and its ${children[Math.floor(Math.random()*children.length)]} who will inherit it, then you know what must be done`





  /// stuff for the emails hehe ///
  var fullLetter2 = `${sentence1}. ${sentence2}. ${sentence3}. ${sentence4}. ${sentence5}. ${sentence6}. ${sentence7}. ${sentence8}. ${sentence9}. ${sentence10}.`
    var commonAppEmails = [
      "info@harderforcongress.com",
      "Aaron@FordforNevada.com",
      "abigail@democraticags.org",
      "andrew.romanoff@andrewromanoff.com",
      "andrew@andrewgounardes.com",
      "andrew@andrewlearned.com",
      "andrew@andrewyang.com",
      "angela@halaforvirginia.com",
      "angie@angiefornebraska.com",
      "anna@annaeshoo4congress.com",
      "benray@benraylujan.com",
      "bob_graham@graham.senate.gov",
      "conrad_burns@burns.senate.gov",
      "contact@andomforny.com",
      "contact@dougjones.com",
      "contact@emergeamerica.org",
      "contact@hello.hickenlooper.com",
      "contact@rebeccaforwa.com",
      "craig@thomas.senate.gov",
      "data@nighthorse.falcontech.com",
      "dccc@dccc.org",
      "debbie@debbieforcongress.com",
      "democraticparty@democrats.org",
      "democratslive@democrats.org",
      "dirk_kempthorne@kempthorne.senate.gov",
      "donald@valdezforco.com",
      "donna@donnashalala.com",
      "email@murkowski.senate.gov",
      "feedback@act.democrats.org",
      "frank_lautenberg@lautenberg.senate.gov",
      "gabrielle@carolyn4congress.com",
      "gavin@e.gavinnewsom.com",
      "gavin@gavinnewsom.com",
      "gcisneros@cisnerosforcongress.com",
      "GovernorPolis@state.co.us",
      "Helen@HelenRosenthal.com",
      "hello@aishawahab.com",
      "hello@bradpfaff.com",
      "hello@coraformontana.com",
      "hello@corybooker.com",
      "hello@e.welchforvermont.com",
      "hello@jayinslee.com",
      "hello@johnfetterman.com",
      "hello@phillipsforcongress.org",
      "info@abbieformayor.com",
      "info@abigailspanberger.com",
      "info@action.rosenfornevada.com",
      "Info@alexmorseforcongress.com",
      "info@alishashelton.com",
      "info@allenthomascongress.com",
      "info@allisonrusso.com",
      "info@alyse4alaska.com",
      "reply@janetmills.com",
      "sam_brownback@brownback.senate.gov",
      "Sandra@Agathaforcongress.com",
      "sanfordbishop@sanfordbishop.com",
      "sen_dodd@dodd.senate.gov",
      "senator_al@damato.senate.gov",
      "Senator_Bingaman@bingaman.senate.gov",
      "Senator_Byrd@Byrd.Senate.gov",
      "senator_chafee@chafee.senate.gov",
      "senator_coverdell@coverdell.senate.gov",
      "senator_dewine@dewine.senate.gov",
      "senator_domenici@domenici.senate.gov",
      "senator_frist@frist.senate.gov",
      "Senator_Glenn@glenn.senate.gov",
      "Senator_Gorton@gorton.senate.gov",
      "senator_hatch@hatch.senate.gov",
      "senator_kohl@kohl.senate.gov",
      "senator_leahy@leahy.senate.gov",
      "senator_lieberman@lieberman.senate.gov",
      "senator_max_cleland@cleland.senate.gov",
      "Senator_McCain@mccain.senate.gov",
      "Senator_Merkley@Merkley.senate.gov",
      "senator_murray@murray.senate.gov",
      "senator_reid@reid.senate.gov",
      "senator_specter@specter.senate.gov",
      "senator_thompson@thompson.senate.gov",
      "senator_torricelli@torricelli.senate.gov",
      "senator.hutchinson@hutchinson.senate.gov",
      "senator@bennett.senate.gov",
      "senator@biden.senate.gov",
      "senator@boxer.senate.gov",
      "senator@breaux.senate.gov",
      "senator@bryan.sen.gov",
      "senator@bumpers.senate.gov",
      "senator@cochran.senate.gov",
      "senator@collins.senate.gov",
      "senator@conrad.senate.gov",
      "senator@dorgan.senate.gov",
      "Senator@dpm.senate.gov",
      "senator@enzi.senate.gov",
      "senator@faircloth.senate.gov",
      "senator@feingold.senate.gov",
      "senator@feinstein.senate.gov",
      "senator@hollings.senate.gov",
      "senator@hutchison.senate.gov",
      "senator@inouye.senate.gov",
      "senator@kennedy.senate.gov",
      "senator@landrieu.senate.gov",
      "senator@levin.senate.gov",
      "senator@mcconnell.senate.gov",
      "senator@mikulski.senate.gov",
      "senator@moseley-braun.senate.gov",
      "senator@robb.senate.gov",
      "senator@rockefeller.senate.gov",
      "senator@santorum.senate.gov",
      "senator@sarbanes.senate.gov",
      "senator@shelby.senate.gov",
      "senator@thurmond.senate.gov",
      "senator@warner.senate.gov",
      "senator@wellstone.senate.gov",
      "senatorlott@lott.senate.gov",
      "suzanne@bonamiciforcongress.com",
      "tammy@tammyduckworth.com",
      "Team@AratiForCongress.com",
      "team@brigidforsouthjersey.com",
      "team@her-time.com",
      "team@joshstein.org",
      "team@leftnet.org",
      "team@lizziefletcher.com",
      "team@marienewmanforcongress.com",
      "team@sethmoulton.com",
      "teamcori@coribush.org",
      "teameva@evaforcongress.com",
      "teammaloney@carolynmaloney.com",
      "teampappas@chrispappas.org",
      "TeamWilliams@kathleenformontana.com",
      "tim_johnson@johnson.senate.gov",
      "xavier@xavierbecerra.com",
     ]
    var caEmails = commonAppEmails.join(",")
 
   var emailLetter2 = encodeURIComponent(fullLetter2.replace("No Toys Left Behind"))
   var emailLink2=`mailto:?bcc=${caEmails}&subject=No Toys Left Behind &body=${emailLetter2}`
  $('#commonAppEmails').attr("href", emailLink2) 

})