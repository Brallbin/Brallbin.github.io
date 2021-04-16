function RandomNum() {
    var Num = Math.floor(Math.random() * 100) + 1;
    console.log(Num);

    var Movie;
    var MovieSrc;
    var Title;
    var Description;

    switch(Num) {
        case 1:
        Movie = "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt0111161/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_1"
        Title = "The Shawshank Redemption (1995)"
        Description = "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
        break;

        case 2:
        Movie = "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt0068646/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_2"
        Title = "The Godfather (1972)"
        Description = "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son."
        break;

        case 3:
        Movie = "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt0071562/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_3"
        Title = "The Godfather: Part II (1974)"
        Description = "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate."
        break;

        case 4:
        Movie = "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt0468569/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_4"
        Title = "The Dark Knight (2008)"
        Description = "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice."
        break;

        case 5:
        Movie = "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt0050083/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_5"
        Title = "12 Angry Men (1957)"
        Description = "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence."
        break;

        case 6:
        Movie = "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt0108052/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_6"
        Title = "Schindler's List (1993)"
        Description = "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis."
        break;

        case 7:
        Movie = "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt0167260/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_7"
        Title = "The Lord of the Rings: The Return of the King (2003)"  
        Description = "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring."
        break;

        case 8:
        Movie = "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt0110912/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_8"
        Title = "Pulp Fiction (1994)" 
        Description = "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption."
        break;

        case 9:
        Movie = "https://m.media-amazon.com/images/M/MV5BOTQ5NDI3MTI4MF5BMl5BanBnXkFtZTgwNDQ4ODE5MDE@._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt0060196/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_9"
        Title = "The Good, the Bad and the Ugly (1966)"  
        Description = "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery."
        break;

        case 10:
        Movie = "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt0120737/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_10"
        Title = "The Lord of the Rings: The Fellowship of the Ring (2001)"  
        Description = "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron."
        break;

        case 11:
        Movie = "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt0137523/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_11"
        Title = "Fight Club (1999)"  
        Description = "A nameless first person narrator (Edward Norton) attends support groups in attempt to subdue his emotional state and relieve his insomniac state. When he meets Marla"
        break;
        
        case 12:
        Movie = "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt0109830/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_12"
        Title = " Forrest Gump (1994)" 
        Description = "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart."
        break;

        case 13:
        Movie = "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt1375666/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_13"
        Title = "Inception (2010)"  
        Description = "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O."
        break;

        case 14:
        Movie = "https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt0167261/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_14"
        Title = "The Lord of the Rings: The Two Towers (2002)"  
        Description = "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard."
        break;

        case 15:
        Movie = "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt0080684/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_15"
        Title = "Star Wars: Episode V - The Empire Strikes Back (1980)"  
        Description = "After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued by Darth Vader and a bounty hunter named Boba Fett all over the galaxy."
        break;

        case 16:
        Movie = "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt0133093/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_16"
        Title = "The Matrix (1999)"  
        Description = "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence."
        break;

        case 17:
        Movie = "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt0099685/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_17"
        Title = "Goodfellas (1990)" 
        Description = "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate."
        break;

        case 18:
        Movie = "https://m.media-amazon.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt0073486/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_18"
        Title = "One Flew Over the Cuckoo's Nest (1975)"  
        Description = "A criminal pleads insanity and is admitted to a mental institution, where he rebels against the oppressive nurse and rallies up the scared patients."
        break;

        case 19:
        Movie = "https://m.media-amazon.com/images/M/MV5BOWE4ZDdhNmMtNzE5ZC00NzExLTlhNGMtY2ZhYjYzODEzODA1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt0047478/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_19"
        Title = "Seven Samurai (1954)" 
        Description = "A poor village under attack by bandits recruits seven unemployed samurai to help them defend themselves."
        break;

        case 20:
        Movie = "https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt0114369/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_20"
        Title = "Se7en (1995)"  
        Description = "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives."
        break;

        case 21:
        Movie = "https://m.media-amazon.com/images/M/MV5BYmJmM2Q4NmMtYThmNC00ZjRlLWEyZmItZTIwOTBlZDQ3NTQ1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt0118799/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_21"
        Title = "Life Is Beautiful (1997)" 
        Description = "When an open-minded Jewish librarian and his son become victims of the Holocaust, he uses a perfect mixture of will, humor, and imagination to protect his son from the dangers around their camp."
        break;
        
        case 22:
        Movie = "https://m.media-amazon.com/images/M/MV5BOTMwYjc5ZmItYTFjZC00ZGQ3LTlkNTMtMjZiNTZlMWQzNzI5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt0317248/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_22"
        Title = "City of God (2002)" 
        Description = "In the slums of Rio, two kids' paths diverge as one struggles to become a photographer and the other a kingpin."
        break;

        case 23:
        Movie = "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt0102926/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_23"
        Title = "The Silence of the Lambs (1991)"   
        Description = "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims."
        break;

        case 24:
        Movie = "https://m.media-amazon.com/images/M/MV5BZjc4NDZhZWMtNGEzYS00ZWU2LThlM2ItNTA0YzQ0OTExMTE2XkEyXkFqcGdeQXVyNjUwMzI2NzU@._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt0038650/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_24"
        Title = "It's a Wonderful Life (1946)" 
        Description = "An angel is sent from Heaven to help a desperately frustrated businessman by showing him what life would have been like if he had never existed."
        break;

        case 25:
        Movie = "https://m.media-amazon.com/images/M/MV5BZjhkMDM4MWItZTVjOC00ZDRhLThmYTAtM2I5NzBmNmNlMzI1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt0120815/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_25"
        Title = "Saving Private Ryan (1998)"  
        Description = "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action."
        break;

        case 26:
        Movie = "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt0076759/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_26"
        Title = "Star Wars: Episode IV - A New Hope (1977)"  
        Description = "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader."
        break;

        case 27:
        Movie = "https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt0120689/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_27"
        Title = "The Green Mile (1999)" 
        Description = "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift."
        break;

        case 28:
        Movie = "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt0245429/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_28"
        Title = "Spirited Away (2001)" 
        Description = "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts."
        break;

        case 29:
        Movie = "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt0816692/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_29"
        Title = "Interstellar (2014)" 
        Description = "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
        break;

        case 30:
        Movie = "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt6751668/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_30"
        Title = "Parasite (2019)"
        Description = "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan."
        break;

        case 31:
        Movie = "https://m.media-amazon.com/images/M/MV5BODllNWE0MmEtYjUwZi00ZjY3LThmNmQtZjZlMjI2YTZjYmQ0XkEyXkFqcGdeQXVyNTc1NTQxODI@._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt0110413/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_31"
        Title = "Léon: The Professional (1994)" 
        Description = "Mathilda, a 12-year-old girl, is reluctantly taken in by Léon, a professional assassin, after her family is murdered. An unusual relationship forms as she becomes his protégée and learns the assassin's trade."
        break;
        
        case 32:
        Movie = "https://m.media-amazon.com/images/M/MV5BYjBmYTQ1NjItZWU5MS00YjI0LTg2OTYtYmFkN2JkMmNiNWVkXkEyXkFqcGdeQXVyMTMxMTY0OTQ@._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt0056058/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_32"
        Title = "Hara-Kiri (1962)"
        Description = "When a ronin requesting seppuku at a feudal lord's palace is told of the brutal suicide of another ronin who previously visited, he reveals how their pasts are intertwined - and in doing so challenges the clan's integrity."
        break;

        case 33:
        Movie = "https://m.media-amazon.com/images/M/MV5BYTViNjMyNmUtNDFkNC00ZDRlLThmMDUtZDU2YWE4NGI2ZjVmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt0114814/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_33"
        Title = "The Usual Suspects (1995)" 
        Description = "A sole survivor tells of the twisty events leading up to a horrific gun battle on a boat, which began when five criminals met at a seemingly random police lineup."
        break;

        case 34:
        Movie = "https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt0110357/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_34"
        Title = "The Lion King (1994)" 
        Description = "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself."
        break;

        case 35:
        Movie = "https://m.media-amazon.com/images/M/MV5BOWRiZDIxZjktMTA1NC00MDQ2LWEzMjUtMTliZmY3NjQ3ODJiXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt0253474/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_35"
        Title = "The Pianist (2002)" 
        Description = "A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto of World War II."
        break;

        case 36:
        Movie = "https://m.media-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt0103064/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_36"
        Title = "Terminator 2: Judgment Day (1991)" 
        Description = "A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her ten year old son, John Connor, from a more advanced and powerful cyborg."
        break;

        case 37:
        Movie = "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt0088763/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_37"
        Title = "Back to the Future (1985)"  
        Description = "Marty McFly, a 17-year-old high school student, is accidentally sent thirty years into the past in a time-traveling DeLorean invented by his close friend, the eccentric scientist Doc Brown."
        break;

        case 38:
        Movie = "https://m.media-amazon.com/images/M/MV5BZTJhN2FkYWEtMGI0My00YWM4LWI2MjAtM2UwNjY4MTI2ZTQyXkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt0120586/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_38"
        Title = "American History X (1998)"  
        Description = "A former neo-nazi skinhead tries to prevent his younger brother from going down the same wrong path that he did."
        break;

        case 39:
        Movie = "https://m.media-amazon.com/images/M/MV5BYjJiZjMzYzktNjU0NS00OTkxLWEwYzItYzdhYWJjN2QzMTRlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt0027977/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_39"
        Title = "Modern Times (1936)" 
        Description = "The Tramp struggles to live in modern industrial society with the help of a young homeless woman."
        break;

        case 40:
        Movie = "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt0172495/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_40"
        Title = "Gladiator (2000)"  
        Description = "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery."
        break;

        case 41:
        Movie = "https://m.media-amazon.com/images/M/MV5BNTQwNDM1YzItNDAxZC00NWY2LTk0M2UtNDIwNWI5OGUyNWUxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt0054215/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_41"
        Title = "Psycho (1960)"  
        Description = "A Phoenix secretary embezzles $40,000 from her employer's client, goes on the run, and checks into a remote motel run by a young man under the domination of his mother."
        break;
        
        case 42:
        Movie = "https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt0407887/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_42"
        Title = "The Departed (2006)" 
        Description = "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston."
        break;

        case 43:
        Movie = "https://m.media-amazon.com/images/M/MV5BY2I4MmM1N2EtM2YzOS00OWUzLTkzYzctNDc5NDg2N2IyODJmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt0021749/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_43"
        Title = "City Lights (1931)"
        Description = "With the aid of a wealthy erratic tippler, a dewy-eyed tramp who has fallen in love with a sightless flower girl accumulates money to be able to help her medically."
        break;

        case 44:
        Movie = "https://m.media-amazon.com/images/M/MV5BOTA5NDZlZGUtMjAxOS00YTRkLTkwYmMtYWQ0NWEwZDZiNjEzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt2582802/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_44"
        Title = "Whiplash (2014)"   
        Description = "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential."
        break;

        case 45:
        Movie = "https://m.media-amazon.com/images/M/MV5BMTYxNDA3MDQwNl5BMl5BanBnXkFtZTcwNTU4Mzc1Nw@@._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt1675434/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_45"
        Title = "The Intouchables (2011)" 
        Description = "After he becomes a quadriplegic from a paragliding accident, an aristocrat hires a young man from the projects to be his caregiver."
        break;

        case 46:
        Movie = "https://m.media-amazon.com/images/M/MV5BZjEwNDVhZjMtYzA1MS00ZWUxLThjOGUtZTliNGZiNGYyMjA3XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt0095327/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_46"
        Title = "Grave of the Fireflies (1988)" 
        Description = "A young boy and his little sister struggle to survive in Japan during World War II."
        break;

        case 47:
        Movie = "https://m.media-amazon.com/images/M/MV5BMjA4NDI0MTIxNF5BMl5BanBnXkFtZTYwNTM0MzY2._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt0482571/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_47"
        Title = "The Prestige (2006)" 
        Description = "After a tragic accident, two stage magicians engage in a battle to create the ultimate illusion while sacrificing everything they have to outwit each other."
        break;

        case 48:
        Movie = "https://m.media-amazon.com/images/M/MV5BZGI5MjBmYzYtMzJhZi00NGI1LTk3MzItYjBjMzcxM2U3MDdiXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt0064116/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_48"
        Title = "Once Upon a Time in the West (1968)" 
        Description = "A mysterious stranger with a harmonica joins forces with a notorious desperado to protect a beautiful widow from a ruthless assassin working for the railroad."
        break;

        case 49:
        Movie = "https://m.media-amazon.com/images/M/MV5BY2IzZGY2YmEtYzljNS00NTM5LTgwMzUtMzM1NjQ4NGI0OTk0XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt0034583/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_49"
        Title = "Casablanca (1942)"
        Description = "A cynical expatriate American cafe owner struggles to decide whether or not to help his former lover and her fugitive husband escape the Nazis in French Morocco."
        break;

        case 50:
        Movie = "https://m.media-amazon.com/images/M/MV5BM2FhYjEyYmYtMDI1Yy00YTdlLWI2NWQtYmEzNzAxOGY1NjY2XkEyXkFqcGdeQXVyNTA3NTIyNDg@._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt0095765/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_50"
        Title = "Cinema Paradiso (1988)"
        Description = "A filmmaker recalls his childhood when falling in love with the pictures at the cinema of his home village and forms a deep friendship with the cinema's projectionist."
        break;

        case 51:
        Movie = "https://m.media-amazon.com/images/M/MV5BNGUxYWM3M2MtMGM3Mi00ZmRiLWE0NGQtZjE5ODI2OTJhNTU0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt0047396/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_51"
        Title = "Rear Window (1954)"
        Description = "A wheelchair-bound photographer spies on his neighbors from his apartment window and becomes convinced one of them has committed murder."
        break;
        
        case 52:
        Movie = "https://m.media-amazon.com/images/M/MV5BMmQ2MmU3NzktZjAxOC00ZDZhLTk4YzEtMDMyMzcxY2IwMDAyXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt0078748/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_52"
        Title = "Alien (1979)"  
        Description = "After a space merchant vessel receives an unknown transmission as a distress call, one of the crew is attacked by a mysterious life form and they soon realize that its life cycle has merely begun."
        break;

        case 53:
        Movie = "https://m.media-amazon.com/images/M/MV5BMDdhODg0MjYtYzBiOS00ZmI5LWEwZGYtZDEyNDU4MmQyNzFkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt0078788/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_53"
        Title = "Apocalypse Now (1979)" 
        Description = "A U.S. Army officer serving in Vietnam is tasked with assassinating a renegade Special Forces Colonel who sees himself as a god."
        break;

        case 54:
        Movie = "https://m.media-amazon.com/images/M/MV5BZTcyNjk1MjgtOWI3Mi00YzQwLWI5MTktMzY4ZmI2NDAyNzYzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt0209144/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_54"
        Title = "Memento (2000)"
        Description = "A man with short-term memory loss attempts to track down his wife's murderer."
        break;

        case 55:
        Movie = "https://m.media-amazon.com/images/M/MV5BMmExYWJjNTktNGUyZS00ODhmLTkxYzAtNWIzOGEyMGNiMmUwXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt0032553/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_55"
        Title = "The Great Dictator (1940)"
        Description = "Dictator Adenoid Hynkel tries to expand his empire while a poor Jewish barber tries to avoid persecution from Hynkel's regime."
        break;

        case 56:
        Movie = "https://m.media-amazon.com/images/M/MV5BMjA0ODEzMTc1Nl5BMl5BanBnXkFtZTcwODM2MjAxNA@@._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt0082971/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_56"
        Title = "Indiana Jones and the Raiders of the Lost Ark (1981)"
        Description = "In 1936, archaeologist and adventurer Indiana Jones is hired by the U.S. government to find the Ark of the Covenant before Adolf Hitler's Nazis can obtain its awesome powers."
        break;

        case 57:
        Movie = "https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt1853728/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_57"
        Title = "Django Unchained (2012)" 
        Description = "With the help of a German bounty-hunter, a freed slave sets out to rescue his wife from a brutal plantation-owner in Mississippi."
        break;

        case 58:
        Movie = "https://m.media-amazon.com/images/M/MV5BOThkM2EzYmMtNDE3NS00NjlhLTg4YzktYTdhNzgyOWY3ZDYzXkEyXkFqcGdeQXVyNzQzNzQxNzI@._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt0405094/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_58"
        Title = "The Lives of Others (2006)"
        Description = "In 1984 East Berlin, an agent of the secret police, conducting surveillance on a writer and his lover, finds himself becoming increasingly absorbed by their lives."
        break;

        case 59:
        Movie = "https://m.media-amazon.com/images/M/MV5BZDQ5OWVlN2MtNDlkMS00MjliLTkyOTktMGUwNWJkZDZhNGM0XkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt0050825/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_59"
        Title = "Paths of Glory (1957)"
        Description = "After refusing to attack an enemy position, a general accuses the soldiers of cowardice and their commanding officer must defend them."
        break;

        case 60:
        Movie = "https://m.media-amazon.com/images/M/MV5BNjViNWRjYWEtZTI0NC00N2E3LTk0NGQtMjY4NTM3OGNkZjY0XkEyXkFqcGdeQXVyMjUxMTY3ODM@._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt8503618/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_60"
        Title = "Hamilton (2020)"
        Description = "The real life of one of America's foremost founding fathers and first Secretary of the Treasury, Alexander Hamilton. Captured live on Broadway from the Richard Rodgers Theater with the original Broadway cast."
        break;

        case 61:
        Movie = "https://m.media-amazon.com/images/M/MV5BMjExMTg5OTU0NF5BMl5BanBnXkFtZTcwMjMxMzMzMw@@._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt0910970/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_61"
        Title = "WALL·E (2008)"
        Description = "In the distant future, a small waste-collecting robot inadvertently embarks on a space journey that will ultimately decide the fate of mankind."
        break;
        
        case 62:
        Movie = "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt7286456/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_62"
        Title = "Joker (2019)"
        Description = "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker."
        break;

        case 63:
        Movie = "https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt0081505/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_63"
        Title = "The Shining (1980)" 
        Description = "A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future."
        break;

        case 64:
        Movie = "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt4154756/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_64"
        Title = "Avengers: Infinity War (2018)"
        Description = "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe."
        break;

        case 65:
        Movie = "https://m.media-amazon.com/images/M/MV5BMTU0NTkyNzYwMF5BMl5BanBnXkFtZTgwMDU0NDk5MTI@._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt0043014/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_65"
        Title = "Sunset Blvd. (1950)" 
        Description = "A screenwriter develops a dangerous relationship with a faded film star determined to make a triumphant return."
        break;

        case 66:
        Movie = "https://m.media-amazon.com/images/M/MV5BNDQwODU5OWYtNDcyNi00MDQ1LThiOGMtZDkwNWJiM2Y3MDg0XkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt0051201/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_66"
        Title = "Witness for the Prosecution (1957)" 
        Description = "A veteran British barrister must defend his client in a murder trial that has surprise after surprise."
        break;

        case 67:
        Movie = "https://m.media-amazon.com/images/M/MV5BMTI3NTQyMzU5M15BMl5BanBnXkFtZTcwMTM2MjgyMQ@@._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt0364569/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_67"
        Title = "Oldboy (2003)"
        Description = "After being kidnapped and imprisoned for fifteen years, Oh Dae-Su is released, only to find that he must find his captor in five days."
        break;

        case 68:
        Movie = "https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt4633694/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_68"
        Title = "Spider-Man: Into the Spider-Verse (2018)"
        Description = "Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-powered individuals from other dimensions to stop a threat for all realities."
        break;

        case 69:
        Movie = "https://m.media-amazon.com/images/M/MV5BNGIzY2IzODQtNThmMi00ZDE4LWI5YzAtNzNlZTM1ZjYyYjUyXkEyXkFqcGdeQXVyODEzNjM5OTQ@._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt0119698/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_69"
        Title = "Princess Mononoke (1997)"
        Description = "On a journey to find the cure for a Tatarigami's curse, Ashitaka finds himself in the middle of a war between the forest gods and Tatara, a mining colony. In this quest he also meets San, the Mononoke Hime."
        break;

        case 70:
        Movie = "https://m.media-amazon.com/images/M/MV5BZWI3ZTMxNjctMjdlNS00NmUwLWFiM2YtZDUyY2I3N2MxYTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt0057012/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_70"
        Title = "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb (1964)"
        Description = "An insane general triggers a path to nuclear holocaust that a War Room full of politicians and generals frantically tries to stop."
        break;

        case 71:
        Movie = "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt1345836/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_71"
        Title = "The Dark Knight Rises (2012)"
        Description = "Eight years after the Joker's reign of anarchy, Batman, with the help of the enigmatic Catwoman, is forced from his exile to save Gotham City from the brutal guerrilla terrorist Bane"
        break;
        
        case 72:
        Movie = "https://m.media-amazon.com/images/M/MV5BMGFkNWI4MTMtNGQ0OC00MWVmLTk3MTktOGYxN2Y2YWVkZWE2XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt0087843/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_72"
        Title = "Once Upon a Time in America (1984)"
        Description = "A former Prohibition-era Jewish gangster returns to the Lower East Side of Manhattan over thirty years later, where he once again must confront the ghosts and regrets of his old life."
        break;

        case 73:
        Movie = "https://m.media-amazon.com/images/M/MV5BODRmZDVmNzUtZDA4ZC00NjhkLWI2M2UtN2M0ZDIzNDcxYThjL2ltYWdlXkEyXkFqcGdeQXVyNTk0MzMzODA@._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt5311514/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_73"
        Title = "Your Name. (2016)"
        Description = "Two strangers find themselves linked in a bizarre way. When a connection forms, will distance be the only thing to keep them apart?"
        break;

        case 74:
        Movie = "https://m.media-amazon.com/images/M/MV5BZGU2OGY5ZTYtMWNhYy00NjZiLWI0NjUtZmNhY2JhNDRmODU3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt0090605/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_74"
        Title = "Aliens (1986)"
        Description = "Fifty-seven years after surviving an apocalyptic attack aboard her space vessel by merciless space creatures, Officer Ripley awakens from hyper-sleep and tries to warn anyone who will listen about the predators."
        break;

        case 75:
        Movie = "https://m.media-amazon.com/images/M/MV5BYjQ5NjM0Y2YtNjZkNC00ZDhkLWJjMWItN2QyNzFkMDE3ZjAxXkEyXkFqcGdeQXVyODIxMzk5NjA@._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt2380307/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_75"
        Title = "Coco (2017)"
        Description = "Aspiring musician Miguel, confronted with his family's ancestral ban on music, enters the Land of the Dead to find his great-great-grandfather, a legendary singer."
        break;

        case 76:
        Movie = "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt4154796/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_76"
        Title = "Avengers: Endgame (2019)" 
        Description = "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe."
        break;

        case 77:
        Movie = "https://m.media-amazon.com/images/M/MV5BMmExNzU2ZWMtYzUwYi00YmM2LTkxZTQtNmVhNjY0NTMyMWI2XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt8267604/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_77"
        Title = "Kapernaum (2018)"
        Description = "While serving a five-year sentence for a violent crime, a 12-year-old boy sues his parents for neglect."
        break;

        case 78:
        Movie = "https://m.media-amazon.com/images/M/MV5BNTBmZWJkNjctNDhiNC00MGE2LWEwOTctZTk5OGVhMWMyNmVhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt0169547/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_78"
        Title = "American Beauty (1999)"
        Description = "A sexually frustrated suburban father has a mid-life crisis after becoming infatuated with his daughter's best friend."
        break;

        case 79:
        Movie = "https://m.media-amazon.com/images/M/MV5BMzkzMmU0YTYtOWM3My00YzBmLWI0YzctOGYyNTkwMWE5MTJkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt0112573/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_79"
        Title = "Braveheart (1995)" 
        Description = "Scottish warrior William Wallace leads his countrymen in a rebellion to free his homeland from the tyranny of King Edward I of England."
        break;

        case 80:
        Movie = "https://m.media-amazon.com/images/M/MV5BOTI4NTNhZDMtMWNkZi00MTRmLWJmZDQtMmJkMGVmZTEzODlhXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt0057565/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_80"
        Title = "High and Low (1963)"
        Description = "An executive of a shoe company becomes a victim of extortion when his chauffeur's son is kidnapped and held for ransom."
        break;

        case 81:
        Movie = "https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt0114709/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_81"
        Title = "Toy Story (1995)"
        Description = "A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy's room."
        break;
        
        case 82:
        Movie = "https://m.media-amazon.com/images/M/MV5BOGZhZDIzNWMtNjkxMS00MDQ1LThkMTYtZWQzYWU3MWMxMGU5XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt0082096/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_82"
        Title = "Das Boot (1981)" 
        Description = "The claustrophobic world of a WWII German U-boat; boredom, filth and sheer terror."
        break;

        case 83:
        Movie = "https://m.media-amazon.com/images/M/MV5BMWYxZWRiNzQtYTRmMC00MmQ2LTkwMmYtMWYzOTViYTgyMTE1XkEyXkFqcGdeQXVyNzMzMjU5NDY@._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt1187043/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_83"
        Title = "3 Idiots (2009)"
        Description = "Two friends are searching for their long lost companion. They revisit their college days and recall the memories of their friend who inspired them to think differently, even as the rest of the world called them idiots."
        break;
        
        case 84:
        Movie = "https://m.media-amazon.com/images/M/MV5BNWJlNzUzNGMtYTAwMS00ZjI2LWFmNWQtODcxNWUxODA5YmU1XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt0086879/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_84"
        Title = "Amadeus (1984)"
        Description = "The life, success and troubles of Wolfgang Amadeus Mozart, as told by Antonio Salieri, the contemporaneous composer who was insanely jealous of Mozart's talent and claimed to have murdered him."
        break;

        case 85:
        Movie = "https://m.media-amazon.com/images/M/MV5BOTJiNDEzOWYtMTVjOC00ZjlmLWE0NGMtZmE1OWVmZDQ2OWJhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt0361748/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_85"
        Title = "Inglourious Basterds (2009)"
        Description = "In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owner's vengeful plans for the same."
        break;

        case 86:
        Movie = "https://m.media-amazon.com/images/M/MV5BOTI0MzcxMTYtZDVkMy00NjY1LTgyMTYtZmUxN2M3NmQ2NWJhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt0119217/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_86"
        Title = "Good Will Hunting (1997)" 
        Description = "Will Hunting, a janitor at M.I.T., has a gift for mathematics, but needs help from a psychologist to find direction in his life."
        break;

        case 87:
        Movie = "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt0086190/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_87"
        Title = "Star Wars: Episode VI - Return of the Jedi (1983)"
        Description = "After a daring mission to rescue Han Solo from Jabba the Hutt, the Rebels dispatch to Endor to destroy the second Death Star. Meanwhile, Luke struggles to help Darth Vader back from the dark side without falling into the Emperor's trap."
        break;

        case 88:
        Movie = "https://m.media-amazon.com/images/M/MV5BMDhjZWViN2MtNzgxOS00NmI4LThiZDQtZDI3MzM4MDE4NTc0XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt0986264/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_88"
        Title = "Taare Zameen Par (2007)"
        Description = "An eight-year-old boy is thought to be a lazy trouble-maker, until the new art teacher has the patience and compassion to discover the real problem behind his struggles in school."
        break;

        case 89:
        Movie = "https://m.media-amazon.com/images/M/MV5BZmExNmEwYWItYmQzOS00YjA5LTk2MjktZjEyZDE1Y2QxNjA1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt0105236/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_89"
        Title = "Reservoir Dogs (1992)"
        Description = "When a simple jewelry heist goes horribly wrong, the surviving criminals begin to suspect that one of them is a police informant."
        break;

        case 90:
        Movie = "https://m.media-amazon.com/images/M/MV5BMmNlYzRiNDctZWNhMi00MzI4LThkZTctMTUzMmZkMmFmNThmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt0062622/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_90"
        Title = "2001: A Space Odyssey (1968)"
        Description = "After discovering a mysterious artifact buried beneath the Lunar surface, mankind sets off on a quest to find its origins with help from intelligent supercomputer H.A.L. 9000."
        break;

        case 91:
        Movie = "https://m.media-amazon.com/images/M/MV5BOTdiNzJlOWUtNWMwNS00NmFlLWI0YTEtZmI3YjIzZWUyY2Y3XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt0180093/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_91"
        Title = "Requiem for a Dream (2000)"
        Description = "The drug-induced utopias of four Coney Island people are shattered when their addictions run deep."
        break;
        
        case 92:
        Movie = "https://m.media-amazon.com/images/M/MV5BMTg2NDg3ODg4NF5BMl5BanBnXkFtZTcwNzk3NTc3Nw@@._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt2106476/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_92"
        Title = "The Hunt (2012)"
        Description = "A teacher lives a lonely life, all the while struggling over his son's custody. His life slowly gets better as he finds love and receives good news from his son, but his new luck is about to be brutally shattered by an innocent little lie."
        break;

        case 93:
        Movie = "https://m.media-amazon.com/images/M/MV5BYTE4ODEwZDUtNDFjOC00NjAxLWEzYTQtYTI1NGVmZmFlNjdiL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt0052357/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_93"
        Title = "Vertigo (1958)"
        Description = "A former police detective juggles wrestling with his personal demons and becoming obsessed with a hauntingly beautiful woman."
        break;

        case 94:
        Movie = "https://m.media-amazon.com/images/M/MV5BODA4ODk3OTEzMF5BMl5BanBnXkFtZTgwMTQ2ODMwMzE@._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt0022100/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_94"
        Title = "M (1931)" 
        Description = "When the police in a German city are unable to catch a child-murderer, other criminals join in the manhunt."
        break;

        case 95:
        Movie = "https://m.media-amazon.com/images/M/MV5BMTY4NzcwODg3Nl5BMl5BanBnXkFtZTcwNTEwOTMyMw@@._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt0338013/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_95"
        Title = "Eternal Sunshine of the Spotless Mind (2004)"
        Description = "When their relationship turns sour, a couple undergoes a medical procedure to have each other erased from their memories."
        break;

        case 96:
        Movie = "https://m.media-amazon.com/images/M/MV5BYjBiOTYxZWItMzdiZi00NjlkLWIzZTYtYmFhZjhiMTljOTdkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt0033467/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_96"
        Title = "Citizen Kane (1941)"
        Description = "Following the death of publishing tycoon Charles Foster Kane, reporters scramble to uncover the meaning of his final utterance; 'Rosebud'."
        break;

        case 97:
        Movie = "https://m.media-amazon.com/images/M/MV5BY2Q1MDUyZDktMGJiNC00ZmVkLWI5OGMtZTg5Y2EzMWRiNzNiXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt5074352/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_97"
        Title = "Dangal (2016)"
        Description = "Former wrestler Mahavir Singh Phogat and his two wrestler daughters struggle towards glory at the Commonwealth Games in the face of societal oppression."
        break;

        case 98:
        Movie = "https://m.media-amazon.com/images/M/MV5BODM4Njg0NTAtYjI5Ny00ZjAxLTkwNmItZTMxMWU5M2U3M2RjXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt0091251/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_98"
        Title = "Come and See (1985)"
        Description = "After finding an old rifle, a young boy joins the Soviet resistance movement against ruthless German forces and experiences the horrors of World War II."
        break;

        case 99:
        Movie = "https://m.media-amazon.com/images/M/MV5BZDRjNGViMjQtOThlMi00MTA3LThkYzQtNzJkYjBkMGE0YzE1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt0045152/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_99"
        Title = "Singin' in the Rain (1952)"
        Description = "A silent film production company and cast make a difficult transition to sound."
        break;

        case 100:
        Movie = "https://m.media-amazon.com/images/M/MV5BZjhhMThhNDItNTY2MC00MmU1LTliNDEtNDdhZjdlNTY5ZDQ1XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg";
        MovieSrc = "https://www.imdb.com/title/tt0012349/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=ZJ45QCP71C2KAEAJ5JSD&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_100"
        Title = "The Kid (1921)"
        Description = "The Tramp cares for an abandoned child, but events put that relationship in jeopardy."
        break;

    }

    document.getElementById("MoviePoster").src = Movie;
    document.getElementById("Rank").innerHTML = ("#") + Num;
    document.getElementById("Title").innerHTML = Title;
    document.getElementById("MovieLink").href = MovieSrc;
    document.getElementById("Description").innerHTML = Description;
    
}