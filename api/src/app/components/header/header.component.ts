import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { UserService } from '../../services/user/user.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, RouterOutlet],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(
    private userService: UserService
  ) { }
  user:any = this.userService.UserGet;
}
