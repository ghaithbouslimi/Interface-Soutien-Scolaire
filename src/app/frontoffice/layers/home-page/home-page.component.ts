import { Component, OnInit } from '@angular/core';
import { BlogPostCard } from 'src/app/shared/blogCardPostModel';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  

  posts: BlogPostCard[] = [
    {
      mainImageUrl: 'https://source.unsplash.com/odxB5oIG_iA/400x250',
      category: 'webdevelopment',
      title: 'The Road to Freedom',
      description:
        'WebDevelopment can be a great way to experience true freedom in your life. You can work anywhere, everywhere...',
      authorName: 'John Smith',
    },
    {
      mainImageUrl: 'https://source.unsplash.com/e-S-Pe2EmrE/400x250',
      category: 'webdevelopment',
      title: 'The Road to Freedom',
      description:
        'WebDevelopment can be a great way to experience true freedom in your life. You can work anywhere, everywhere...',
     
      authorName: 'John Smith',
     
    },
    {
      mainImageUrl: 'https://source.unsplash.com/EAvS-4KnGrk/400x250',
      category: 'webdevelopment',
      title: 'The Road to Freedom',
      description:
        'WebDevelopment can be a great way to experience true freedom in your life. You can work anywhere, everywhere...',
     
      authorName: 'John Smith',
      
    },
    {
      mainImageUrl: 'https://source.unsplash.com/RP6Ba_6U154/400x250',
      category: 'we',
      title: 'The Road to Freedom',
      description:
        'Freelancing can be a great way to experience true freedom in your life. You can work anywhere, everywhere...',
      
      authorName: 'John Smith',
      
    },
    {
      mainImageUrl: 'https://source.unsplash.com/I2YSmEUAgDY/400x250',
      category: 'freelancing',
      title: 'The Road to Freedom',
      description:
        'Freelancing can be a great way to experience true freedom in your life. You can work anywhere, everywhere...',
     
      authorName: 'John Smith',
      
    },
    {
      mainImageUrl: 'https://source.unsplash.com/hpTH5b6mo2s/400x250',
      category: 'freelancing',
      title: 'The Road to Freedom',
      description:
        'Freelancing can be a great way to experience true freedom in your life. You can work anywhere, everywhere...',

      authorName: 'John Smith',
    
    },
    {
      mainImageUrl: 'https://source.unsplash.com/2TQwrtZnl08/400x250',
      category: 'freelancing',
      title: 'The Road to Freedom',
      description:
        'Freelancing can be a great way to experience true freedom in your life. You can work anywhere, everywhere...',
      
      authorName: 'John Smith',
    
    },
   
  ];
}