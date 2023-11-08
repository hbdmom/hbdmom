function generateWord()
{
    var words=[
      ["Dear Mum,","Happy Birthday. Thank you for always loving Kael and I. I appreciate all the big and small things you do for us, and am grateful for you. I know I don’t say it, but I do L-word you. Hope you have a good day", "Kindly,","Carys"],
      ["Dear Kennedee,","It’s Scorpio season! Another year around the sun, happy birthday!", "Sincerely Yours,","Courtney & James"],
      ["Dear Aunty Bubba,","Happy Birthday!! Have the best day. Lots of love.","Sincerely Yours,","Carter-James"],
      ["Dear Ken,","Haaaaappiest (I won’t mention the number) Birthday!!! I hope that you have a great day today! Thank you for being you, and always reminding me how much you love and care about me - I’ll never have to question it! I hope that you know that I love you heaps & care about you too! I hope this trip around the sun brings you more happiness, abundance & growth","Love Always,","Lebron & Leyton"],
      ["Dear Kennedee,","Happy birthday, have a great day. 40next year. Kael said he’ll cook you dinner.","Sincerely Yours,","Rob, mum n dad"],
      ["Dear Aunty Ken,","Happy birthday 🥳 hope you have a wonderful day, filled with people, moments and edible things that bring you joy 😅 Sorry we can't be there (as usual 👀), but looking forward to having you here in NZ soon enough. Take time to smell the flowers today and be kind to yourself 😊 ","Love you heaps and always,","Connor, Hayley and Little Aila"],
      ["Dear Kael's Mum,","Happy birthday lil Ken. I remembered your bday this year your welcome 🤣 hope you have a wonderful day love you.","Sincerely Yours,","Shonn"],
      ["Dear Mum,","Happy Birthday! Thank you for the best mom ever and my only mom. I appreciate everything you do for me and Carys. I love you alot. I hope you like my E-Card I made for you with the help of everyone who loves you.","Your Beloved Son,","Kael Your Favourite Son"],
        ];

    	var random = Math.floor(Math.random() * words.length);

   document.getElementById("dear").innerHTML=words[random][0];
   document.getElementById("message").innerHTML=words[random][1];
   document.getElementById("greetings").innerHTML=words[random][2];
   document.getElementById("from").innerHTML=words[random][3];


}

generateWord();
