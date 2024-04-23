import { Component, OnInit } from '@angular/core';
import { NAV_LINKS } from './navigation.metadata';
import { Router, RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { INavLink } from '../../interfaces/nav-link.interface';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, MatTabsModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public currentUrl: string;
  public navLinks: INavLink[] = NAV_LINKS;

  constructor(private _router: Router) {}

  ngOnInit(): void {
    this.currentUrl = this._router.url;
  }
}
