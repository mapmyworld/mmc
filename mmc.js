
//mmw._common.setType('hybrid');
//mmw._common.setType('none');

//var rightbarEl = mmw._overlay.rightbarEl;
//rightbarEl.style.display = 'grid';
//rightbarEl.style.height = '140px';

mmw.map.on('load', async function() {

	var sec14b_gen = await mmw._common.fetchJSON('../mmc/data/HSR-S14B-ADM7.gen.geojson');
	mmw.map.addSource('HSR-S14-ADM7-gen', { type : 'geojson', data : sec14b_gen });
	//mmw._layer.addFillLayer('HSR-S14-ADM7-gen', ['get','color'], .2);
	//mmw._layer.addLineLayer('HSR-S14-ADM7-gen', ['get','color'], 2);
	mmw._layer.addExtrusionLayer('HSR-S14-ADM7-gen', ['get','color'], .7);
	
	var sec14 = await mmw._common.fetchJSON('../mmc/data/HSR-S14-ADM6.geojson');
	mmw.map.addSource('HSR-S14-ADM6', { type : 'geojson', data : sec14 });
	mmw._layer.addFillLayer('HSR-S14-ADM6', ['get','color'], .1);
	mmw._layer.addLineLayer('HSR-S14-ADM6', ['get','color'], 2);

	/*
	mmw.map.addSource('HSR-ADM6', { type : 'geojson', data : '../mmc/data/HSR-ADM6.geojson' });
	mmw._layer.addFillLayer('HSR-ADM6', ['get','color'], .2);
	mmw._layer.addLineLayer('HSR-ADM6', ['get','color'], 1);
	*/
	
	mmw.map.addSource('HSR-ADM5', { type : 'geojson', data : '../mmc/data/HSR-ADM5.geojson' });
	//mmw._layer.addFillLayer('HSR-ADM5', ['get','color'], .1);
	mmw._layer.addLineLayer('HSR-ADM5', ['get','color'], 2);
	
});

