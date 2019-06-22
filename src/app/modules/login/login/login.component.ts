import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user';
import { AuthService } from '../../../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;

  constructor(
    private authSrv: AuthService,
    private toastr: ToastrService
  ) {
    this.user = new User();
  }

  ngOnInit() {
  }

  login(user: User) {
    console.log('login user:', user);
    this.authSrv.login(user).subscribe(loginResult => {
      if (loginResult.retCode === 0) {
        this.toastr.success('登陆成功！', '消息');
      } else {
        this.toastr.error('登陆失败！', '消息');
      }
    });
  }

}
