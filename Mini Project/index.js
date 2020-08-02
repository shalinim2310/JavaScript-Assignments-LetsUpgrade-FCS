var quotes=[ 
	"\"The beautiful thing about life is, that we will never reach an age where there is nothing left to learn, see or be; it’s magical really.\"<br>- Dulce Ruby<small><em>(Adventure Time)</em></small>", 
	"\"When you talk, you are only repeating what you already know. But if you listen, you may learn something new.\"<br> - Dalai Lama", 
	"\"No matter how hard the past, you can always begin again\"<br>- Buddha", 
	"\"It takes no time for the Universe to manifest what you want. Any time delay your experience is due to your delay in getting to the place of believing, knowing and feeling that you already have it. It is you getting yourself on the frequency of what you want. When you are on that frequency, then what you want will appear.\"<br>- Rhonda Byrne",
	"\"Once I realized the most beautiful things in life may have come from transmuting my greatest pains, I understood that feeling things so deeply is in fact a blessing and not a curse.\"<br>-Raz Soos", 
	"\"Get out of your head and into your heart. Think less and feel more.\"<br>-Osho",
	
	"\"If you always put limit on everything you do, physical or anything else. It will spread into your work and into your life. There are no limits. There are only plateaus, and you must not stay there, you must go beyond them.\"<br>- Bruce Lee",
	"\"The Way Get Started Is To Quit Talking And Begin Doing.\"<br>- Walt Disney",
	"\"the people who are crazy enough to think they can change the world are the ones who do.\" <br>- Steve Jobs",
	"\"Nothing is impossible, the word itself says “I’m possible”!\" <br>- Audrey Hepburn",
	"\"The greatest effort is not concerned with results.\"<br> - Atisha",
	"\"Wisdom equals knowledge plus courage. You have to not only know what to do and when to do it, but you have to also be brave enough to follow through.\"<br> - Jarod Kintz",
	"\"In a battle between two ideas, the best one doesn’t necessarily win. No, the idea that wins is the one with the most fearless heretic behind it.\" <br>- Seth Godin",
	"\"Remember, teamwork begins by building trust. And the only way to do that is to overcome our need for invulnerability.\"<br> - Patrick Lencioni",
	"\"Leadership is an action, not a position.\"<br> - Donald McGannon",
	];
	

newQuote=()=>{
var randomNumber=Math.floor(Math.random()*(quotes.length));
var print=document.getElementById('quoteDisplay');
print.innerHTML=quotes[randomNumber];
}