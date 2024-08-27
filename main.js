// // const scene = new THREE.Scene();

// // // 카메라 설정
// // const camera = new THREE.PerspectiveCamera(
// //   75,
// //   window.innerWidth / window.innerHeight,
// //   0.1,
// //   1000
// // );

// // // 렌더러 설정
// // const renderer = new THREE.WebGLRenderer({ antialias: true });
// // renderer.setSize(window.innerWidth, window.innerHeight);
// // renderer.setPixelRatio(window.devicePixelRatio); // 고해상도 디스플레이에서 픽셀 비율 설정
// // document.getElementById("canvas-container").appendChild(renderer.domElement);

// // // 우주 배경으로 사용할 큐브맵 로드
// // const loader = new THREE.CubeTextureLoader();
// // const texture = loader.load([
// //   "assets/space/px.jpg",
// //   "assets/space/nx.jpg",
// //   "assets/space/py.jpg",
// //   "assets/space/ny.jpg",
// //   "assets/space/pz.jpg",
// //   "assets/space/nz.jpg",
// // ]);
// // scene.background = texture;

// // // 지구 텍스처 로드
// // const earthTexture = new THREE.TextureLoader().load("assets/earth.jpg");
// // const earthGeometry = new THREE.SphereGeometry(15, 64, 64);
// // const earthMaterial = new THREE.MeshPhongMaterial({
// //   map: earthTexture,
// //   shininess: 30,
// // });
// // const earth = new THREE.Mesh(earthGeometry, earthMaterial);
// // scene.add(earth);

// // // 빛 추가
// // const ambientLight = new THREE.AmbientLight(0x333333);
// // scene.add(ambientLight);

// // const pointLight = new THREE.PointLight(0xffffff, 1.2);
// // pointLight.position.set(50, 50, 50);
// // scene.add(pointLight);

// // // 별 추가 함수
// // function createStars() {
// //   const starGeometry = new THREE.SphereGeometry(0.25, 24, 24);
// //   const starMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });

// //   for (let i = 0; i < 1000; i++) {
// //     const star = new THREE.Mesh(starGeometry, starMaterial);

// //     const [x, y, z] = Array(3)
// //       .fill()
// //       .map(() => THREE.MathUtils.randFloatSpread(2000)); // 화면이 더 넓게 퍼지도록 값 확장
// //     star.position.set(x, y, z);

// //     scene.add(star);
// //   }
// // }

// // // 로켓 생성 (텍스처 적용)
// // const rocketTexture = new THREE.TextureLoader().load("assets/rocket.jpg");
// // const rocketGeometry = new THREE.ConeGeometry(5, 20, 32);
// // const rocketMaterial = new THREE.MeshPhongMaterial({
// //   map: rocketTexture,
// //   shininess: 50,
// // });
// // const rocket = new THREE.Mesh(rocketGeometry, rocketMaterial);
// // scene.add(rocket);

// // rocket.position.set(40, 0, 0); // 로켓 초기 위치 조정

// // // 애니메이션 루프
// // function animate() {
// //   requestAnimationFrame(animate);

// //   // 지구 회전
// //   earth.rotation.y += 0.001;

// //   // 로켓 궤도 애니메이션
// //   rocket.position.x = 40 * Math.cos(Date.now() * 0.001); // 궤도 반지름 확장
// //   rocket.position.z = 40 * Math.sin(Date.now() * 0.001);
// //   rocket.rotation.x += 0.02;
// //   rocket.rotation.y += 0.02;

// //   rocket.lookAt(earth.position);

// //   renderer.render(scene, camera);
// // }

// // camera.position.z = 100;
// // createStars();
// // animate();

// // // 화면 크기 조절 대응
// // window.addEventListener("resize", () => {
// //   const width = window.innerWidth;
// //   const height = window.innerHeight;
// //   renderer.setSize(width, height);
// //   camera.aspect = width / height;
// //   camera.updateProjectionMatrix();
// // });

// !
// // Three.js 기본 설정
// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );
// const renderer = new THREE.WebGLRenderer({ antialias: true });

// // 렌더러 크기를 창 크기에 맞게 설정하고, 캔버스를 컨테이너에 추가
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.getElementById("canvas-container").appendChild(renderer.domElement);

// // 3D 배경을 위한 애니메이션
// function createParticles() {
//   const geometry = new THREE.BufferGeometry();
//   const vertices = [];

//   for (let i = 0; i < 10000; i++) {
//     const x = THREE.MathUtils.randFloatSpread(2000);
//     const y = THREE.MathUtils.randFloatSpread(2000);
//     const z = THREE.MathUtils.randFloatSpread(2000);

//     vertices.push(x, y, z);
//   }

//   geometry.setAttribute(
//     "position",
//     new THREE.Float32BufferAttribute(vertices, 3)
//   );

//   const material = new THREE.PointsMaterial({ color: 0xffffff, size: 2 });
//   const particles = new THREE.Points(geometry, material);

//   scene.add(particles);
// }

// createParticles();

// camera.position.z = 1000;

// function animate() {
//   requestAnimationFrame(animate);

//   // 카메라 회전 효과
//   camera.position.x += 0.1;
//   camera.position.y += 0.1;
//   camera.lookAt(scene.position);

//   renderer.render(scene, camera);
// }

// animate();

// // 창 크기 조절에 따른 반응형 처리
// function onWindowResize() {
//   const width = window.innerWidth;
//   const height = window.innerHeight;

//   camera.aspect = width / height;
//   camera.updateProjectionMatrix();

//   renderer.setSize(width, height);
// }

// // 창 크기 조절 이벤트 리스너 추가
// window.addEventListener("resize", onWindowResize, false);
