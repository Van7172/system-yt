import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';

export function ElPliegueDelPapel() {
  const frame = useCurrentFrame();
  const comparison = interpolate(frame, [10, 32], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill
      style={{
        padding: 80,
        backgroundColor: '#f4efe4',
        color: '#202f29',
        fontFamily: 'system-ui, sans-serif',
      }}
    >
      <h1 style={{margin: 0, fontSize: 72, lineHeight: 1.08, letterSpacing: -3}}>
        ¿Qué cambia con un pliegue?
      </h1>
      <div
        style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 24,
          marginTop: 48,
          opacity: comparison,
          transform: `translateY(${(1 - comparison) * 24}px)`,
        }}
      >
        <section style={{display: 'grid', gridTemplateRows: '1fr auto', backgroundColor: '#dfded2', padding: 28}}>
          <div style={{display: 'grid', placeItems: 'center'}}>
            <div
              style={{
                width: '76%',
                height: 106,
                backgroundColor: '#fffdf4',
                transform: 'skewX(-18deg)',
                boxShadow: '7px 10px 0 #aaa99c',
              }}
            />
          </div>
          <h2 style={{margin: 0, fontSize: 32}}>Hoja plana</h2>
        </section>
        <section style={{display: 'grid', gridTemplateRows: '1fr auto', backgroundColor: '#dae4d7', padding: 28}}>
          <div style={{display: 'grid', placeItems: 'center'}}>
            <div
              style={{
                width: '76%',
                height: 130,
                background: 'linear-gradient(155deg, #fffdf4 50%, #bacab8 50%)',
                clipPath: 'polygon(0% 85%, 35% 14%, 100% 23%, 75% 94%)',
              }}
            />
          </div>
          <h2 style={{margin: 0, fontSize: 32}}>Hoja plegada</h2>
        </section>
      </div>
    </AbsoluteFill>
  );
}
