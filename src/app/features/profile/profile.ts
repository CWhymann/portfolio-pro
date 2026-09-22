import { Component } from '@angular/core';
import { Translation } from '../../core/translation';

@Component({
  imports: [],
  selector: 'app-profile',
  styleUrl: './profile.scss',
  templateUrl: './profile.html',
})
export class Profile {
  constructor(public translation: Translation) {}
}
