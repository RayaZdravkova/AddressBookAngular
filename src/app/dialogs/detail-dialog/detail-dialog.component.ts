import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/interfaces/user';


@Component({
  selector: 'app-detail-dialog',
  templateUrl: './detail-dialog.component.html',
  styleUrls: ['./detail-dialog.component.scss']
})
/**
 * Represents the DetailDialogComponent.
 * @class
 * @implements {OnInit}
 */
export class DetailDialogComponent implements OnInit {
  /**
   * Form group representing details of a user.
   * @type {FormGroup}
   */
  detailForm = new FormGroup({
    photo: new FormControl({ value: '', disabled: true }),
    name: new FormControl({ value: '', disabled: true }),
    country: new FormControl({ value: '', disabled: true }),
    state: new FormControl({ value: '', disabled: true }),
    city: new FormControl({ value: '', disabled: true }),
    street: new FormControl({ value: '', disabled: true }),
    email: new FormControl({ value: '', disabled: true }),
    phone: new FormControl({ value: '', disabled: true }),
    nationality: new FormControl({ value: '', disabled: true }),
    photoUrl: new FormControl()
  });
  /**
   * URL of the user's photo.
   * @type {string}
   */
  photoUrl: string;
  /**
   * User details object.
   * @type {User}
   */
  detailsOfUser!: User
  /**
   * Constructs DetailDialogComponent with injected data.
   * @constructor
   * @param {User} data - The user data injected into the dialog.
   */
  constructor(@Inject(MAT_DIALOG_DATA) public data: User){
    this.detailsOfUser = data;
    this.photoUrl = this.detailsOfUser.picture.large;
  }
  /**
   * Angular lifecycle hook - executed after component initialization.
   */
  ngOnInit() {
    this.detailForm.controls['name']
      .setValue(this.detailsOfUser.name.title
        + ' ' + this.detailsOfUser.name.first
        + ' ' + this.detailsOfUser.name.last);
    this.detailForm.controls['country'].setValue(this.detailsOfUser.location.country);
    this.detailForm.controls['state'].setValue(this.detailsOfUser.location.state);
    this.detailForm.controls['city'].setValue(this.detailsOfUser.location.city);
    this.detailForm.controls['street']
      .setValue(this.detailsOfUser.location.street.number
      .toString() + ' ' + this.detailsOfUser.location.street.name);
    this.detailForm.controls['email'].setValue(this.detailsOfUser.email);
    this.detailForm.controls['phone'].setValue(this.detailsOfUser.phone);
    this.detailForm.controls['nationality'].setValue(this.detailsOfUser.nat);
  }
}
