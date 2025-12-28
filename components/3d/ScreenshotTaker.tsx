import { useThree } from '@react-three/fiber';
import { useEffect } from 'react';

export function ScreenshotTaker() {
  const { gl, scene, camera } = useThree();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Aperte a tecla 'P' para tirar o print
      if (event.key === 'p' || event.key === 'P') {
        console.log('📸 Tirando screenshot...');

        // 1. Força uma renderização limpa
        gl.render(scene, camera);

        // 2. Extrai a imagem do Canvas como URL
        const screenshotUrl = gl.domElement.toDataURL('image/png');

        // 3. Cria um link falso para download automático
        const link = document.createElement('a');
        link.setAttribute('download', 'meu-asset-3d.png');
        link.setAttribute('href', screenshotUrl);
        link.click();

        console.log('✅ Screenshot salvo na sua pasta de downloads!');
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Limpeza do evento ao desmontar
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [gl, scene, camera]);

  return null; // Esse componente não renderiza nada visualmente
}