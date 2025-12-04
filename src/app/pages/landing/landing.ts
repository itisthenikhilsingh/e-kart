import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-landing',
  imports: [CommonModule, RouterModule],
  templateUrl: './landing.html',
  styleUrl: './landing.css',
})
export class Landing {

  // small UI signal showing CTA busy state; easy to replace with real logic
  ctaLoading = signal(false);

  // Hero text content (typed here so it's easy to localize later)
  readonly headline = 'Discover amazing and trendy products at your fingertips';
  readonly subheadline = 'Shop top picks with fast shipping, 24/7 availability and secure payments.';

  // cards data
  readonly features = [
    {
      title: 'Fast Shipping',
      text: 'Get your order quickly with reliable shipping partners.',
      icon: '🚚'
    },
    {
      title: '24/7 Availability',
      text: 'Browse and buy anytime — our catalog is live around the clock.',
      icon: '🕒'
    },
    {
      title: 'Secure Payments',
      text: 'Payments protected with industry-standard encryption.',
      icon: '🔒'
    }
  ];

  onPrimaryCta() {
    // Example: start loading state and navigate / call service
    this.ctaLoading.set(true);
    // Simulate short delay (in real app, call router.navigate or product service)
    setTimeout(() => this.ctaLoading.set(false), 700);
  }

}
