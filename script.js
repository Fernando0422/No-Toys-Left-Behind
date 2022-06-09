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
      "bob@bobcasey.com",
      "bob@kerrey.senate.gov",
      "bri@gretchenwhitmer.com",
      "cal@calfornc.com",
      "campaign@angiecraig.com",
      "campaign@cartwrightcongress.com",
      "campaign@degette.com",
      "campaign@electlong.com",
      "campaign@harleyforcongress.com",
      "campaign@keithellison.org",
      "campaign@kennedyforma.com",
      "campaign@scottpeters.com",
      "campaign@shariceforcongress.com",
      "campaign@siegelfortexas.org",
      "campaign@valdemings.com",
      "chuck_grassley@grassley.senate.gov",
      "chuck_hagel@hagel.senate.gov", 
      "connect@emergeamerica.org", 
      "connie@mack.senate.gov", 
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
      "info@amandastuck.com",
      "info@amyklobuchar.com",
      "info@amylkennedy.com",
      "info@AmyMcGrath.com",
      "info@andrewcuomo.com",
      "info@andybeshear.com",
      "info@andykimforcongress.com",
      "info@annettetaddeo.com",
      "info@audreyforcongress.com",
      "info@ayannapressley.com",
      "info@azdem.org",
      "info@backroadspac.com",
      "info@barbaraleeforcongress.org",
      "info@beatabbott.com",
      "info@benmcadamsforcongress.com",
      "info@benraylujan.com",
      "info@beraforcongress.com",
      "info@berniesanders.com",
      "info@betoorourke.com",
      "info@betsysweet.com",
      "info@blueamericaproject.org",
      "info@bobbyjeffriesforcongress.com",
      "info@BoldProgressives.org",
      "info@brindisiforcongress.com",
      "info@brynneforcongress.com",
      "info@cadem.org",
      "info@calfornc.com", "info@carolyn4congress.com",
      "info@carolynmaloney.com",
      "info@castenforcongress.com",
      "info@catherinecortezmasto.com",
      "info@chaztedescoforcongress.com",
      "info@cheribeasley.com",
      "info@chrisbubser.com",
      "info@chriscoons.com",
      "info@chrisforgovernor.com",
      "info@christyforcongress.org",
      "info@chuckschumer.com",
      "info@cicilline.com",
      "info@cindyaxneforcongress.com",
      "info@cisnerosforcongress.com",
      "info@colinallred.com",
      "info@coraformontana.com",
      "info@coribush.org",
      "info@ctdems.org",
      "info@debbiewassermanschultz.com",
      "info@delgadoforcongress.com",
      "info@democraticags.org",
      "info@democraticgovernors.org",
      "info@democraticsecretaries.org",
      "info@demsofstate.org",
      "info@derekkilmer.com",
      "info@dga.net",
      "info@dianeforcolorado.com",
      "info@dickdurbin.com",
      "info@donaldnorcrossforcongress.com",
      "info@donnashalala.com",
      "info@drkimschrier.com",
      "info@durbinforsenate.com",
      "info@dutchforcongress.com",
      "info@dwightevans.com",
      "info@e.alessandrabiaggi.com",
      "info@e.charlesbooker.org",
      "info@e.gavinnewsom.com",
      "info@e.ronbegone.com",
      "info@e.timryanforamerica.com",
      "info@edmarkey.com",
      "info@edmarkey.org",
      "info@ehaszforcongress.com",
      "info@elaineforcongress.com",
      "info@electbobferguson.com",
      "info@electdanabalter.com",
      "info@email.ericswalwell.com",
      "info@ericaforus.com",
      "info@evaforcongress.com",
      "info@fightforprogress.org",
      "info@frankenforsenate.org",
      "info@gallegoforarizona.com",
      "info@gerryconnolly.com",
      "info@ghazalahashmi.com",
      "info@ginaortizjones.com",
      "info@givegreen.org",
      "info@gramm96.org",
      "info@gretchenwhitmer.com",
      "info@griswoldforcolorado.org",
      "info@hakeemjeffries.com",
      "info@halaforvirginia.com",
      "info@haleystevensforcongress.com",
      "info@hankforcongress.com",
      "info@hardenforcongress.com",
      "info@harleyforcongress.com",
      "info@hashmi4vasenate.org",
      "info@henrycuellar.com",
      "info@hiralforcongress.com",
      "info@ilhanomar.com",
      "info@jahanahayes.com",
      "info@jamesmackler.com",
      "info@jaredgoldenforcongress.com",
      "info@jaredhuffman.com",
      "info@jasmineforcongress.com",
      "info@jasoncrowforcongress.com",
      "info@jeanneshaheen.org",
      "info@jeffriesforcongress.com",
      "info@jerrynadler.com",
      "info@joebiden.com",
      "info@johnkingforgovernor.com",
      "info@jontester.com",
      "info@joshshapiro.org",
      "info@katieporter.com",
      "info@kendrahorn.com",
      "info@kusterforcongress.com",
      "info@kyl.senate.gov",
      "info@lucyforcongress.com",
      "info@mad4pa.com",
      "info@maggiehassan.com",
      "info@mainedems.org",
      "info@marcusforgeorgia.com",
      "info@markkelly.com",
      "info@markwarnerva.com",
      "info@martinheinrich.com",
      "info@michaelbennet.com",
      "info@mikelevin.org",
      "info@mikiesherrill.com",
      "info@mjfortexas.com",
      "info@mrvanforcongress.com",
      "info@murphy4nj.com",
      "info@newmexicansformichelle.com",
      "info@ninaturner.com",
      "info@ocasiocortez.com",
      "info@oconnorforcongress.com",
      "info@pelosiforcongress.org",
      "info@perlmutterforcolorado.com",
      "info@peteforamerica.com",
      "info@petersformichigan.com",
      "info@philarballo.com",
      "info@plaskettforcongress.org",
      "info@pramilaforcongress.com",
      "info@putortiforcongress.com",
      "info@quinnforcongress.com",
      "info@reelectnydiavelazquez.com",
      "info@richardblumenthal.com",
      "info@rokhanna.com",
      "info@roycooper.com",
      "info@savedemocracypac.com",
      "info@scanlonforcongress.com",
      "info@scholten4iowa.com",
      "info@shahidforchange.us",
      "info@sherrodbrown.com",
      "info@sitesforcongress.com",
      "info@speakergideon.com",
      "info@stabenowforsenate.com",
      "info@stantonforarizona.com",
      "info@stephaniemurphyforcongress.com",
      "info@stevesisolak.com",
      "info@stoneyforrva.com",
      "info@susieleeforcongress.com",
      "info@tammybaldwin.com",
      "info@tedescoforcongress.com",
      "info@tedlieu.com",
      "info@tedracobb.com",
      "info@teresatomlinson.com",
      "info@tomohalleran.com",
      "info@torres.nyc",
      "info@valarkoosh.com",
      "info@votegretchen.com",
      "info@voteyvette.com",
      "info@warnockforgeorgia.com",
      "info@wextonforcongress.com",
      "info@wildforcongress.com",
      "info@zoelofgren.com",
      "information@emilyslist.org",
      "inquiries@chuyforcongress.com",
      "jesse_helms@helms.senate.gov",
      "john_ashcroft@ashcroft.senate.gov",
      "john_kerry@kerry.senate.gov",
      "josh@josh4congress.com",
      "kate@betoorourke.com",
      "kg@kirstengillibrand.com",
      "kit_bond@bond.senate.gov",
      "lander@council.nyc.gov",
      "larry_craig@craig.senate.gov",
      "lugar@iquest.net",
      "mail_grams@grams.senate.gov",
      "mailbox@gregg.senate.gov",
      "matt@mattforarlington.com",
      "max@baucus.senate.gov",
      "mayor.garcetti@lacity.org",
      "michigan@abraham.senate.gov",
      "news@janschakowsky.org",
      "nickles@rpc.senate.gov",
      "olympia@snowe.senate.gov",
      "opinion@smith.senate.gov",
      "rashida@rashidaforcongress.com",
      "RepChrissyHoulahan@mail.house.gov",
      "reply@adamschiff.com",
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
      "tom_daschle@daschle.senate.gov",
      "tom_harkin@harkin.senate.gov",
      "us@bowmanforcongress.com",
      "us@jessicacisnerosforcongress.com",
      "valdezforco@gmail.com,",
      "vanhollenformd@vanhollen.org",
      "vermont@jeffords.senate.gov",
      "wendell_ford@ford.senate.gov",
      "wyden@teleport.com",
      "xavier@xavierbecerra.com",
     ]
    var caEmails = commonAppEmails.join(",")
 
   var emailLetter2 = encodeURIComponent(fullLetter2.replace("No Toys Left Behind"))
   var emailLink2=`mailto:?bcc=${caEmails}&subject=No Toys Left Behind &body=${emailLetter2}`
  $('#commonAppEmails').attr("href", emailLink2) 

})