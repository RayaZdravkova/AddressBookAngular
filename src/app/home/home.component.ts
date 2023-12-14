import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';
import { MatDialog } from '@angular/material/dialog';
import { DetailDialogComponent } from '../dialogs/detail-dialog/detail-dialog.component';
import { User } from '../interfaces/user';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
/**
 * Represents the HomeComponent.
 * @class
 * @implements {OnInit}
 */
export class HomeComponent implements OnInit {
  /**
  * Form group for filtration.
  * @type {FormGroup}
  */
  filtrationForm: FormGroup;
  /**
   * Array of User objects to store user data.
   * @type {User[]}
   */
  usersDataArray: User[] = [];
  /**
   * Array defining columns to display in the component.
   * @type {string[]}
   */
  columnsToDisplay = ['firstName', 'lastName', 'gender', 'country',
                      'city', 'street', 'details'];
  /**
   * Constructs HomeComponent with necessary services.
   * @constructor
   * @param {HomeService} homeService - The service handling HomeComponent functionality.
   * @param {MatDialog} dialog - The Angular Material dialog service.
   * @param {HttpClient} http - The Angular HttpClient service.
   * @param {FormBuilder} formBuilder - The form builder service to create FormGroup.
   */
  constructor(private homeService: HomeService, private dialog: MatDialog,
     private http: HttpClient, private formBuilder: FormBuilder){
    /**
     * Initialize the filtrationForm FormGroup.
     * @type {FormGroup}
     * @property {FormControl} name - Control for name field.
     * @property {FormControl} country - Control for country field.
     * @property {FormControl} city - Control for city field.
     * @property {FormControl} gender - Control for gender field.
     */
      this.filtrationForm = this.formBuilder.group({
        name: "",
        country: "",
        city: "",
        gender: ""
      });
     }
  /**
   * Angular lifecycle hook - executed after component initialization.
   */
  ngOnInit(){
    this.fetchUsers();
  }
  /**
   * Fetches users from HomeService.
   */
  fetchUsers(): void {
    this.homeService.getUsers().subscribe(
       /**
       * Success callback function.
       * @param {any} data - The retrieved data.
       */
      (data) => {
        this.usersDataArray = data.content;
      },
        /**
       * Error callback function.
       * @param {any} error - The encountered error.
       */
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }
  /**
   * Opens dialog to display user details.
   * @param {User} user - The user object whose details to display.
   */
  onShowDetails(user: User){
    this.dialog.open(DetailDialogComponent, {
      height: '570px',
      width: '500px',
      data: user
    });
  }
  /**
   * Searches for users based on filtrationForm values.
   */
  searchUsers() {
    // console.log(this.filtrationForm.value);
}
}