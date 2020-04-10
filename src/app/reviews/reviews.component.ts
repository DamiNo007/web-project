import { Component, OnInit } from '@angular/core';
import { Review } from '../review'
import { ReviewService } from '../review.service'

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  reviews:Review[];

  constructor(private reviewService:ReviewService) {}

  ngOnInit(): void {
    this.getReviews();
  }

  getReviews():void{
    this.reviewService.getReviews().subscribe(reviews=>{this.reviews = reviews;});
  }

}