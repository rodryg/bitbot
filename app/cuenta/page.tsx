'use client'

import { Card, Button } from 'flowbite-react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function Cuenta() {
  const router = useRouter();

  /*const clearSession = () => {
    localStorage.clear()
    window.location.reload()
  }*/

  const clearSession = async () => {
    try {
      const response = await axios.post('/api/logout', {});
      console.log('document.cookie', response.status);
      if (response.status === 200) {
        /* localStorage.removeItem('apiKey');
        localStorage.removeItem('apiSecret'); */
        // Borrar todas las cookies
        console.log('cookie', JSON.stringify(document.cookie));
        // Borrar todo el localStorage
        localStorage.clear();

        router.push('/');
      } else {
        // Manejar errores de cierre de sesión aquí
      }
    } catch (error) {
      console.error(error);
      // Manejar errores de red aquí
    }
  };

  return (
    <Card>
      <h1>Mi cuenta</h1>
      <Button onClick={clearSession}>
        Cerrar sesión
      </Button>
    </Card>
  )
}