const map: any = {
    'app':                        'app',
    'src':                        'src',
    'rxjs':                       'lib/rxjs',
    '@angular':                   'lib/@angular'
  };

const packages: any = {
    'app':                        { main: 'main.js',  defaultExtension: 'js' },
    'src':                        { defaultExtension: 'js' },
    '@angular':                   { defaultExtension: 'js' },
    'rxjs':                       { defaultExtension: 'js' }
  };


const packageNames: string[] = [
    '@angular/common',
    '@angular/compiler',
    '@angular/core',
    '@angular/http',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    '@angular/router-deprecated',
    '@angular/testing',
    '@angular/upgrade',
  ];

packageNames.forEach(function(pkgName) {
    packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
});


declare var System: any;

// Apply TS configuration.
System.config({
  transpiler: 'typescript',
  typescriptOptions: { emitDecoratorMetadata: true }
});

// Apply the user's configuration.
System.config({ map: map, packages: packages });