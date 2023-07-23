
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.scss']
})
export class InicioSesionComponent implements OnInit {
  @ViewChild('wrapper') wrapperElement!: ElementRef<HTMLDivElement>;
  @ViewChild('loginLink') loginLinkElement!: ElementRef<HTMLAnchorElement>;
  @ViewChild('registerLink') registerLinkElement!: ElementRef<HTMLAnchorElement>;

  ngOnInit(): void {
    this.registerLinkElement.nativeElement.addEventListener('click', () => {
      this.wrapperElement.nativeElement.classList.add('active');
    });

    this.loginLinkElement.nativeElement.addEventListener('click', () => {
      this.wrapperElement.nativeElement.classList.remove('active');
    });
  }
}