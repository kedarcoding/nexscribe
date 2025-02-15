// src/app/page.jsx
import { redirect } from 'next/navigation';

export default function RedirectToHome() {
  redirect('/home');  // Redirects from / to /home
}
