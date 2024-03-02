import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsentService {

  private consentKey = 'userConsent';
  private policyKey = 'policyRead';

  constructor() { }

  checkConsent() {
    const consent = localStorage.getItem(this.consentKey);
    return consent === 'accepted' || consent === 'declined';
  }

  giveConsent() {
    localStorage.setItem(this.consentKey, 'accepted');
  }

  declineConsent() {
    localStorage.setItem(this.consentKey, 'declined');
  }
  checkPolicyRead() {
    return localStorage.getItem(this.policyKey);
  }

  markPolicyAsRead() {
    localStorage.setItem(this.policyKey, 'read');
  }
}
