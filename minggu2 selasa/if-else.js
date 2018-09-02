var nama = ''
var peran = ''

if(nama=='' && peran==''){
  console.log('Nama harus diisi!')
}else if(nama== '' && peran=='ksatria'){console.log('Nama harus diisi!')
  }else if(nama== '' && peran=='tabib'){
    console.log('Nama harus diisi!')
  }else if(nama== '' && peran=='penyihir'){
    console.log('Nama harus diisi!')
  }else if(peran=='tabib'){
    console.log('Selamat datang di Dunia Proxytia, '+nama+'\nHalo tabib, ' +nama+', kamu akan membantu temanmu yang terluka!')
  }else if(peran=='ksatria'){
    console.log('Selamat datang di Dunia Proxytia, '+nama+'\nHalo ksatria ' +nama+', kamu dapat menyerang dengan senjatamu!')
  }else if(peran=='penyihir'){
    console.log('Selamat datang di Dunia Proxytia, '+nama+'\nHalo penyihir ' +nama+', ciptakan keajaiban yang membantu kemenanganmu!')
    }else if (nama){
  console.log('Halo '+nama+ ', Pilih peranmu untuk memulai game!')
  }else {
  console.log('pilih peran ksatria, tabib, atau penyihir!')
  }
