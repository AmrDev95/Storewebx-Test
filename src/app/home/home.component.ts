import { Component, OnInit } from '@angular/core';
import { DisplayService } from '../display.service';
import { Movies } from './../movies';
import { DeleteService } from './../delete.service';
import { Router } from '@angular/router';
import { UpdateService } from '../update.service';
import { CreateService } from '../create.service';
import { CategoriesService } from '../categories.service';
import { Categories } from './../categories';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _DisplayService:DisplayService , private _DeleteService:DeleteService , private router:Router, private _UpdateService:UpdateService, private _CreateService:CreateService, private _CategoriesService:CategoriesService) { }

  displayUpdate:boolean = false;
  movies:Movies[] =[];
  baseUrl:string ='https://test-api.storexweb.com/';
  currentId:number =0
  updateName:string ='';
  updateDescription:string ='';
  updateImage:File|null =null;
  updateCategory:number =0;
  displayAddMovie:boolean = false;
  categories:Categories[] = [];
  
  ngOnInit(): void {
    this.displayData();
    this._CategoriesService.getCategories().subscribe(
      (data)=>{
        this.categories = data.message;
        console.log(this.categories);
      }
    );
  }

  update(id:number, name:string, description:string, categoryId:number){
    this.currentId = id;
    this.displayUpdate = true;
    this.updateName = name;
    this.updateDescription = description;
    this.updateCategory = categoryId;
  }

  uploadImage(e:any){
    this.updateImage = e.target.files[0];
    console.log(this.updateImage);
  }

  updateData(x:any){
    this._UpdateService.updateMovie(this.currentId, x.movieName , x.movieDescription, this.updateImage, x.movieCategory).subscribe(
      (data)=>{
        console.log(data);
      },

      (err)=>{

      },

      ()=>{
        this.displayUpdate = false;
        this.displayData();
      }
    );
  }

  close(){
    this.displayUpdate = false;
    this.displayAddMovie = false;
  }

  del(id:number){
    this._DeleteService.deleteMovie(id).subscribe({
      next:(data)=>{
        console.log(data.status);
        this.displayData();
      }
    });
    
  }

  displayData(){
    this._DisplayService.displayMovies().subscribe({
      next:(data)=>{
        this.movies = data.message;
        console.log(this.movies);
      }
    });
  }

  addMovie(newMovie:any){
    this._CreateService.createMovie(newMovie.movieName, newMovie.movieDescription, this.updateImage, newMovie.movieCategory).subscribe(
      (data)=>{
        console.log(data);
      },

      (err)=>{
        console.log(err);
      },

      ()=>{
        this.displayAddMovie = false;
        this.displayData();
      }
    );
  }
}
