const { PrismaClient } = require('../prisma-generated/client');
const prisma = new PrismaClient();

async function main() {
  console.log('Start seeding...');

  // 1. Cleanup existing data (Order matters due to Foreign Keys)
  await prisma.review.deleteMany();
  await prisma.order_item.deleteMany();
  await prisma.order.deleteMany();
  await prisma.cart_item.deleteMany();
  await prisma.cart.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();
  await prisma.user_address.deleteMany();
  await prisma.user.deleteMany();
  await prisma.admin_user.deleteMany();
  await prisma.promotion.deleteMany();

  console.log('Database cleaned.');

  // 2. Define Static Data Arrays (Crucial for Image URL uniqueness and clean loops)

  const adminUsersData = [
    { username: 'karim_manager', email: 'karim.b@moroccodevs.com', role: 'super_admin' },
    { username: 'layla_ops', email: 'layla.z@moroccodevs.com', role: 'admin' },
    { username: 'youssef_support', email: 'youssef.k@moroccodevs.com', role: 'admin' },
    { username: 'samira_logistics', email: 'samira.h@moroccodevs.com', role: 'admin' },
    { username: 'hassan_inventory', email: 'hassan.m@moroccodevs.com', role: 'admin' },
    { username: 'nora_content', email: 'nora.f@moroccodevs.com', role: 'admin' },
    { username: 'driss_tech', email: 'driss.l@moroccodevs.com', role: 'admin' },
    { username: 'amina_finance', email: 'amina.r@moroccodevs.com', role: 'admin' },
  ];

  const usersData = [
    { username: 'amine_code', email: 'amine.dev@gmail.com', name: 'Amine El Idrissi' },
    { username: 'sarah_js', email: 'sarah.smith@outlook.com', name: 'Sarah Smith' },
    { username: 'mohamed_py', email: 'mohamed.benali@yahoo.fr', name: 'Mohamed Benali' },
    { username: 'fatima_web', email: 'fatima.zahra@gmail.com', name: 'Fatima Zahra' },
    { username: 'john_doe_dev', email: 'john.doe.coding@protonmail.com', name: 'John Doe' },
    { username: 'kenza_react', email: 'kenza.b@icloud.com', name: 'Kenza Bouzidi' },
    { username: 'omar_fullstack', email: 'omar.khalil@gmail.com', name: 'Omar Khalil' },
    { username: 'lisa_frontend', email: 'lisa.williams@gmail.com', name: 'Lisa Williams' },
    { username: 'rachid_backend', email: 'rachid.m@live.com', name: 'Rachid Mouline' },
    { username: 'sofi_ux', email: 'sofia.design@gmail.com', name: 'Sofia Alami' },
  ];

  const categoriesData = [
    { name: 'Hoodies', slug: 'hoodies', desc: 'Warm hoodies for late night coding sessions.', img: 'https://images.pexels.com/photos/5926385/pexels-photo-5926385.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
    { name: 'T-Shirts', slug: 't-shirts', desc: 'Breathable tees with geeky prints.', img: 'https://images.pexels.com/photos/34156907/pexels-photo-34156907.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
    { name: 'Hats & Caps', slug: 'hats-caps', desc: 'Keep your head in the game.', img: 'https://images.pexels.com/photos/9935865/pexels-photo-9935865.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
    { name: 'Laptop Stickers', slug: 'stickers', desc: 'Decorate your machine.', img: 'https://images.pexels.com/photos/25435665/pexels-photo-25435665.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
    { name: 'Mugs', slug: 'mugs', desc: 'Coffee is fuel for code.', img: 'https://images.pexels.com/photos/29279566/pexels-photo-29279566.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
    { name: 'Accessories', slug: 'accessories', desc: 'Mousepads, keychains and more.', img: 'https://images.pexels.com/photos/32313567/pexels-photo-32313567.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
    { name: 'Gift Cards', slug: 'gift-cards', desc: 'The perfect gift for a dev.', img: 'https://images.pexels.com/photos/6149054/pexels-photo-6149054.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
    { name: 'Limited Edition', slug: 'limited', desc: 'Exclusive Moroccan Tech drops.', img: 'https://images.pexels.com/photos/4502961/pexels-photo-4502961.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
  ];

  const productsData = [
    { 
      title: 'Full Stack Hero Hoodie', 
      sku: 'HD-FS-001', 
      price: 45.00, 
      cover: 'https://images.pexels.com/photos/28758001/pexels-photo-28758001.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      list: 'https://images.pexels.com/photos/12555790/pexels-photo-12555790.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940|https://images.pexels.com/photos/7655627/pexels-photo-7655627.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    { 
      title: 'Git Commit Push Force Tee', 
      sku: 'TS-GIT-002', 
      price: 25.00, 
      cover: 'https://productp.s3.us-west-2.amazonaws.com/background/zaki_prod/generated/05a13066f900473ca2d062488b441ce3.png',
      list: 'https://images.pexels.com/photos/34975075/pexels-photo-34975075.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940|https://images.pexels.com/photos/2112636/pexels-photo-2112636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    { 
      title: 'Python Snake Embroidered Cap', 
      sku: 'CP-PY-003', 
      price: 18.00, 
      cover: 'https://images.pexels.com/photos/33611287/pexels-photo-33611287.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      list: 'https://images.pexels.com/photos/26956136/pexels-photo-26956136.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940|https://productp.s3.us-west-2.amazonaws.com/background/zaki_prod/generated/7c069669d68a4a338fdaece226180566.png'
    },
    { 
      title: 'React.js Component Mug', 
      sku: 'MG-RCT-004', 
      price: 12.50, 
      cover: 'https://images.pexels.com/photos/10458210/pexels-photo-10458210.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      list: 'https://images.pexels.com/photos/1656025/pexels-photo-1656025.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940|https://images.pexels.com/photos/6312184/pexels-photo-6312184.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    { 
      title: 'Docker Container Boxers', 
      sku: 'UW-DCK-005', 
      price: 15.00, 
      cover: 'https://productp.s3.us-west-2.amazonaws.com/background/zaki_prod/generated/1377e0871a0d45e7bf66f8e7f43c4c3b.png',
      list: 'https://productp.s3.us-west-2.amazonaws.com/background/zaki_prod/generated/647e8d19241d4356bc67c7f43c7db65d.png|https://productp.s3.us-west-2.amazonaws.com/background/zaki_prod/generated/907f8aad44a34aff9acf07400dbaf90e.png'
    },
    { 
      title: 'Casablanca Tech Hub Sticker Pack', 
      sku: 'ST-CSB-006', 
      price: 8.00, 
      cover: 'https://images.pexels.com/photos/19987743/pexels-photo-19987743.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      list: 'https://images.pexels.com/photos/24381087/pexels-photo-24381087.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940|https://images.pexels.com/photos/20065419/pexels-photo-20065419.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    { 
      title: '404 Brain Not Found Hoodie', 
      sku: 'HD-404-007', 
      price: 48.00, 
      cover: 'https://images.pexels.com/photos/29996222/pexels-photo-29996222.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      list: 'https://images.pexels.com/photos/6311647/pexels-photo-6311647.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940|https://productp.s3.us-west-2.amazonaws.com/background/zaki_prod/generated/ba3f9a28cd1e4472b04a1c7462bf76a6.png'
    },
    { 
      title: 'TypeScript Strictly Typed Tee', 
      sku: 'TS-TYP-008', 
      price: 28.00, 
      cover: 'https://images.pexels.com/photos/1933589/pexels-photo-1933589.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      list: 'https://images.pexels.com/photos/12922525/pexels-photo-12922525.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940|https://productp.s3.us-west-2.amazonaws.com/background/zaki_prod/generated/b213f9f807294d60a139f0308db27825.png'
    },
    { 
      title: 'Linux Penguin Plushie', 
      sku: 'AC-TUX-009', 
      price: 22.00, 
      cover: 'https://images.pexels.com/photos/28773403/pexels-photo-28773403.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      list: 'https://images.pexels.com/photos/5868299/pexels-photo-5868299.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940|https://productp.s3.us-west-2.amazonaws.com/background/zaki_prod/generated/7a18590d71d941f69c09d868a0527b30.png'
    },
    { 
      title: 'HTML5 is a Programming Language Mug', 
      sku: 'MG-HTM-010', 
      price: 12.50, 
      cover: 'https://images.pexels.com/photos/6312270/pexels-photo-6312270.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      list: 'https://images.pexels.com/photos/28668425/pexels-photo-28668425.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940|https://images.pexels.com/photos/6312176/pexels-photo-6312176.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    { 
      title: 'Keyboard Warrior Wrist Rest', 
      sku: 'AC-WRI-011', 
      price: 30.00, 
      cover: 'https://images.pexels.com/photos/4383926/pexels-photo-4383926.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      list: 'https://productp.s3.us-west-2.amazonaws.com/background/zaki_prod/generated/a3fff6cd060048ed9bf7046e3f7c11e5.png|https://images.pexels.com/photos/31497028/pexels-photo-31497028.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    { 
      title: 'Marrakech Digital Nomad Backpack', 
      sku: 'BG-MRK-012', 
      price: 85.00, 
      cover: 'https://images.pexels.com/photos/10450995/pexels-photo-10450995.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      list: 'https://images.pexels.com/photos/3829552/pexels-photo-3829552.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940|https://productp.s3.us-west-2.amazonaws.com/background/zaki_prod/generated/54a662f7dc0e40d4b21c8b3d0168a697.png'
    },
  ];

  const promotionsData = [
    { title: 'Summer Code Camp Sale', subtitle: 'Get 20% off all T-shirts', img: 'https://productp.s3.us-west-2.amazonaws.com/background/zaki_prod/generated/56fccf076f1041c9a8930ee7bbd86a82.png' },
    { title: 'Back to School', subtitle: 'Upgrade your gear for the new semester', img: 'https://productp.s3.us-west-2.amazonaws.com/background/zaki_prod/generated/4fca009521fb41d88036f72c28d25866.png' },
    { title: 'Ramadan Nights', subtitle: 'Cozy Hoodies for long coding nights', img: 'https://productp.s3.us-west-2.amazonaws.com/background/zaki_prod/generated/51e8cec7cbc34374a71dd8a781509880.png' },
    { title: 'Cyber Monday', subtitle: 'Biggest Tech Deals of the Year', img: 'https://productp.s3.us-west-2.amazonaws.com/background/zaki_prod/generated/b3049dc7e0734f988cf8f994096bc298.png' },
    { title: 'Developer Day Special', subtitle: 'Free stickers with every order', img: 'https://productp.s3.us-west-2.amazonaws.com/background/zaki_prod/generated/cbaedc3828324b119e8572134492f29a.png' },
    { title: 'Winter Collection', subtitle: 'Stay warm, code cool', img: 'https://productp.s3.us-west-2.amazonaws.com/background/zaki_prod/generated/a8ef14c2a2994a41ad33e3248d917c7e.png' },
    { title: 'New Arrivals', subtitle: 'Check out the latest Moroccan Tech fashion', img: 'https://productp.s3.us-west-2.amazonaws.com/background/zaki_prod/generated/3c33229c2a2444f984414860ee9fdfb8.png' },
    { title: 'Clearance', subtitle: 'Last chance to buy', img: 'https://productp.s3.us-west-2.amazonaws.com/background/zaki_prod/generated/d8d1eebda3e144a298d68af62497ead7.png' },
  ];

  // 3. Insert Admin Users
  for (const admin of adminUsersData) {
    await prisma.admin_user.create({
      data: {
        username: admin.username,
        email: admin.email,
        password: 'hashed_password_placeholder', // In a real app, hash this
        role: admin.role, // 'admin' or 'super_admin'
        status: 'active',
        created_at: new Date(),
        updated_at: new Date(),
      },
    });
  }
  console.log('Admin users seeded.');

  // 4. Insert Users and Addresses
  const createdUserIds = [];
  for (const u of usersData) {
    const user = await prisma.user.create({
      data: {
        username: u.username,
        email: u.email,
        password: 'hashed_password_placeholder',
        role: 'customer',
        status: 'active',
        avatar_url: 'https://productp.s3.us-west-2.amazonaws.com/background/zaki_prod/generated/c56e5763ff074676b5e958b306c72fba.png',
        created_at: new Date(),
        updated_at: new Date(),
      },
    });
    createdUserIds.push(user.id);

    // Create address for user
    await prisma.user_address.create({
      data: {
        user_id: user.id,
        recipient_name: u.name,
        phone_number: '+212 600 000 000',
        address_line_1: '123 Mohammed V Avenue',
        city: 'Casablanca',
        postal_code: '20000',
        is_default: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
    });
  }
  console.log('Users and addresses seeded.');

  // 5. Insert Categories
  const createdCategoryIds = [];
  for (const cat of categoriesData) {
    const category = await prisma.category.create({
      data: {
        name: cat.name,
        slug: cat.slug,
        description: cat.desc,
        cover_image_url: cat.img,
        created_at: new Date(),
        updated_at: new Date(),
      },
    });
    createdCategoryIds.push(category.id);
  }
  console.log('Categories seeded.');

  // 6. Insert Products
  const createdProductIds = [];
  let productIndex = 0;
  for (const prod of productsData) {
    // Assign category cyclically
    const catId = createdCategoryIds[productIndex % createdCategoryIds.length];
    
    const product = await prisma.product.create({
      data: {
        title: prod.title,
        name: prod.title,
        sku: prod.sku,
        description_short: 'High quality material designed for developers.',
        description_long: 'This product is designed with the modern coder in mind. Featuring durable fabric and a comfortable fit, it is perfect for long coding sessions or casual wear. Ships directly from Morocco.',
        price: prod.price,
        cover_image_url: prod.cover,
        image_url_list: prod.list,
        stock_quantity: 50,
        available_sizes: 'S,M,L,XL,XXL',
        available_colors: 'Black,White,Grey,Navy',
        status: 'active',
        category_id: catId,
        created_at: new Date(),
        updated_at: new Date(),
      },
    });
    createdProductIds.push(product.id);
    productIndex++;
  }
  console.log('Products seeded.');

  // 7. Insert Carts and Cart Items (for some users)
  for (let i = 0; i < createdUserIds.length; i++) {
    // Only half users have carts
    if (i % 2 === 0) continue;

    const userId = createdUserIds[i];
    const cart = await prisma.cart.create({
      data: {
        user_id: userId,
        subtotal_price: 45.00,
        total_price: 50.00,
        shipping_fee: 5.00,
        created_at: new Date(),
        updated_at: new Date(),
      },
    });

    // Add one random item to cart
    const randomProdId = createdProductIds[Math.floor(Math.random() * createdProductIds.length)];
    await prisma.cart_item.create({
      data: {
        cart_id: cart.id,
        product_id: randomProdId,
        quantity: 1,
        unit_price: 45.00,
        selected_size: 'L',
        selected_color: 'Black',
        created_at: new Date(),
        updated_at: new Date(),
      },
    });
  }
  console.log('Carts seeded.');

  // 8. Insert Orders and Order Items
  for (let i = 0; i < createdUserIds.length; i++) {
    const userId = createdUserIds[i];
    
    // Create an order for each user
    const orderDate = new Date();
    orderDate.setDate(orderDate.getDate() - Math.floor(Math.random() * 30)); // Random date in last 30 days

    const order = await prisma.order.create({
      data: {
        order_number: `ORD-${2023000 + i}`,
        user_id: userId,
        status: 'delivered',
        payment_method: 'credit_card',
        total_amount: 60.00,
        total_price: 55.00,
        shipping_fee: 5.00,
        shipping_name: usersData[i].name,
        shipping_phone: '+212 612 345 678',
        shipping_address: '456 Hassan II Blvd, Rabat',
        shipping_city: 'Rabat',
        created_at: orderDate,
        updated_at: orderDate,
      },
    });

    const randomProdId = createdProductIds[i % createdProductIds.length];
    
    await prisma.order_item.create({
      data: {
        order_id: order.id,
        product_id: randomProdId,
        product_title: productsData[i % productsData.length].title,
        quantity: 1,
        unit_price: 55.00,
        price_at_purchase: 55.00,
        selected_size: 'M',
        selected_color: 'Navy',
        created_at: orderDate,
        updated_at: orderDate,
      },
    });

    // 9. Add a review for this product from this user
    await prisma.review.create({
      data: {
        product_id: randomProdId,
        user_id: userId,
        user_name: usersData[i].name,
        rating_value: 4 + (i % 2), // 4 or 5 stars
        comment_text: 'Great quality! Really love the design and the fabric feels premium. Delivery to Rabat was fast.',
        created_at: new Date(),
        updated_at: new Date(),
      },
    });
  }
  console.log('Orders and Reviews seeded.');

  // 10. Insert Promotions
  for (const promo of promotionsData) {
    await prisma.promotion.create({
      data: {
        title: promo.title,
        subtitle: promo.subtitle,
        background_image_url: promo.img,
        created_at: new Date(),
        updated_at: new Date(),
      },
    });
  }
  console.log('Promotions seeded.');

  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });