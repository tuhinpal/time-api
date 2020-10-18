## Indian Time API


### Backstory
Previously I worked for a client of mine and I needed a time api for that, I found many apis but many of them are not free or limited or just give me a unix time, to convert a time I used Javascript Function, that thing make it complicated so i decided to use my own api for fetch time. To make an api i need another api to get unixtime, the api have to be very fast and free. Luckily i found [Akmai's Time Api](https://time.akamai.com/ "Akmai's Time Api"), which give me unixtime. The time based on GMT, to convert it on IST I added + 5 Hour 30 Mins (19800) with it. Firstly I was thinking to use Cloudflare Workers but it is limited for 1 Lakh request, To make it truly unlimited I used Vercel. To convert time in readble format i used [MomentJS](https://momentjs.com/ "MomentJS").<br><br>

### Make Your Own
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fcachecleanerjeet%2Ftime-api)



<br><br>
<p align="center"> <b>My Website & Social</b></p>
<br>
<p align="center">
 
 <a href="https://tu.hin.life">
    <img alt="Website" width="30px" src="https://firebasestorage.googleapis.com/v0/b/webtuhin.appspot.com/o/githubstatic%2Fwebsite.svg?alt=media&token=5c3ea7e0-d4f7-4566-b78a-bdee6c65f03e" />
  </a>  
..
<a href="https://fb.me/jeeetpaul">
    <img alt="Facebook" width="30px" src="https://cdn.jsdelivr.net/npm/simple-icons@3.2.0/icons/facebook.svg" />
  </a>  
..
  <a href="https://www.instagram.com/jeeetpaul">
    <img alt="Instagram" width="30px" src="https://cdn.jsdelivr.net/npm/simple-icons@3.2.0/icons/instagram.svg" />
  </a>
..
  <a href="https://www.youtube.com/channel/UCa4FMtLpYcOBtjKOZgzTFNA">
    <img alt="YouTube" width="30px" src="https://cdn.jsdelivr.net/npm/simple-icons@3.2.0/icons/youtube.svg" />
  </a>
..
  <a href="https://blog.iamtuhin.ga">
    <img alt="Blogger" width="30px" src="https://cdn.jsdelivr.net/npm/simple-icons@3.2.0/icons/blogger.svg" />
  </a>
  
</p>


