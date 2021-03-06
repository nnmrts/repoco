// @flow
import { ago, atf, bdi, ben, bfa, bwa, caf, civ, cmr, cod, cog, com, cpv, dji, dza, egy, eri, esh, eth, gab, gha, gin, gmb, gnb, gnq, iot, ken, lbr, lby, lso, mar, mdg, mli, moz, mrt, mus, mwi, myt, nam, ner, nga, reu, rwa, sdn, sen, shn, sle, som, ssd, stp, swz, syc, tcd, tgo, tun, tza, uga, zaf, zmb, zwe } from "./expressions/africa.js";
import { abw, aia, arg, atg, bes, bhs, blm, blz, bmu, bol, bra, brb, bvt, can, chl, col, cri, cub, cuw, cym, dma, dom, ecu, flk, glp, grd, grl, gtm, guf, guy, hnd, hti, jam, kna, lca, maf, mex, msr, mtq, nic, pan, per, pri, pry, sgs, slv, spm, sur, sxm, tca, tto, ury, usa, vct, ven, vgb, vir } from "./expressions/americas.js";
import { ata } from "./expressions/antarctica.js";
import { afg, are, arm, aze, bgd, bhr, brn, btn, chn, cyp, geo, hkg, idn, ind, irn, irq, isr, jor, jpn, kaz, kgz, khm, kor, kwt, lao, lbn, lka, mac, mdv, mmr, mng, mys, npl, omn, pak, phl, prk, pse, qat, sau, sgp, syr, tha, tjk, tkm, tls, tur, twn, uzb, vnm, yem } from "./expressions/asia.js";
import { ala, alb, and, aut, bel, bgr, bih, blr, che, cze, deu, dnk, esp, est, fin, fra, fro, gbr, ggy, gib, grc, hrv, hun, imn, irl, isl, ita, jey, lie, ltu, lux, lva, mco, mda, mkd, mlt, mne, nld, nor, pol, prt, rou, rus, sjm, smr, srb, svk, svn, swe, ukr, vat } from "./expressions/europe.js";
import { asm, aus, cck, cok, cxr, fji, fsm, gum, hmd, kir, mhl, mnp, ncl, nfk, niu, nru, nzl, pcn, plw, png, pyf, slb, tkl, ton, tuv, umi, vut, wlf, wsm } from "./expressions/oceania.js";

export {
	abw,
	afg,
	ago,
	aia,
	ala,
	alb,
	and,
	are,
	arg,
	arm,
	asm,
	ata,
	atf,
	atg,
	aus,
	aut,
	aze,
	bdi,
	bel,
	ben,
	bes,
	bfa,
	bgd,
	bgr,
	bhr,
	bhs,
	bih,
	blm,
	blr,
	blz,
	bmu,
	bol,
	bra,
	brb,
	brn,
	btn,
	bvt,
	bwa,
	caf,
	can,
	cck,
	che,
	chl,
	chn,
	civ,
	cmr,
	cod,
	cog,
	cok,
	col,
	com,
	cpv,
	cri,
	cub,
	cuw,
	cxr,
	cym,
	cyp,
	cze,
	deu,
	dji,
	dma,
	dnk,
	dom,
	dza,
	ecu,
	egy,
	eri,
	esh,
	esp,
	est,
	eth,
	fin,
	fji,
	flk,
	fra,
	fro,
	fsm,
	gab,
	gbr,
	geo,
	ggy,
	gha,
	gib,
	gin,
	glp,
	gmb,
	gnb,
	gnq,
	grc,
	grd,
	grl,
	gtm,
	guf,
	gum,
	guy,
	hkg,
	hmd,
	hnd,
	hrv,
	hti,
	hun,
	idn,
	imn,
	ind,
	iot,
	irl,
	irn,
	irq,
	isl,
	isr,
	ita,
	jam,
	jey,
	jor,
	jpn,
	kaz,
	ken,
	kgz,
	khm,
	kir,
	kna,
	kor,
	kwt,
	lao,
	lbn,
	lbr,
	lby,
	lca,
	lie,
	lka,
	lso,
	ltu,
	lux,
	lva,
	mac,
	maf,
	mar,
	mco,
	mda,
	mdg,
	mdv,
	mex,
	mhl,
	mkd,
	mli,
	mlt,
	mmr,
	mne,
	mng,
	mnp,
	moz,
	mrt,
	msr,
	mtq,
	mus,
	mwi,
	mys,
	myt,
	nam,
	ncl,
	ner,
	nfk,
	nga,
	nic,
	niu,
	nld,
	nor,
	npl,
	nru,
	nzl,
	omn,
	pak,
	pan,
	pcn,
	per,
	phl,
	plw,
	png,
	pol,
	pri,
	prk,
	prt,
	pry,
	pse,
	pyf,
	qat,
	reu,
	rou,
	rus,
	rwa,
	sau,
	sdn,
	sen,
	sgp,
	sgs,
	shn,
	sjm,
	slb,
	sle,
	slv,
	smr,
	som,
	spm,
	srb,
	ssd,
	stp,
	sur,
	svk,
	svn,
	swe,
	swz,
	sxm,
	syc,
	syr,
	tca,
	tcd,
	tgo,
	tha,
	tjk,
	tkl,
	tkm,
	tls,
	ton,
	tto,
	tun,
	tur,
	tuv,
	twn,
	tza,
	uga,
	ukr,
	umi,
	ury,
	usa,
	uzb,
	vat,
	vct,
	ven,
	vgb,
	vir,
	vnm,
	vut,
	wlf,
	wsm,
	yem,
	zaf,
	zmb,
	zwe
};

export default {
	abw,
	afg,
	ago,
	aia,
	ala,
	alb,
	and,
	are,
	arg,
	arm,
	asm,
	ata,
	atf,
	atg,
	aus,
	aut,
	aze,
	bdi,
	bel,
	ben,
	bes,
	bfa,
	bgd,
	bgr,
	bhr,
	bhs,
	bih,
	blm,
	blr,
	blz,
	bmu,
	bol,
	bra,
	brb,
	brn,
	btn,
	bvt,
	bwa,
	caf,
	can,
	cck,
	che,
	chl,
	chn,
	civ,
	cmr,
	cod,
	cog,
	cok,
	col,
	com,
	cpv,
	cri,
	cub,
	cuw,
	cxr,
	cym,
	cyp,
	cze,
	deu,
	dji,
	dma,
	dnk,
	dom,
	dza,
	ecu,
	egy,
	eri,
	esh,
	esp,
	est,
	eth,
	fin,
	fji,
	flk,
	fra,
	fro,
	fsm,
	gab,
	gbr,
	geo,
	ggy,
	gha,
	gib,
	gin,
	glp,
	gmb,
	gnb,
	gnq,
	grc,
	grd,
	grl,
	gtm,
	guf,
	gum,
	guy,
	hkg,
	hmd,
	hnd,
	hrv,
	hti,
	hun,
	idn,
	imn,
	ind,
	iot,
	irl,
	irn,
	irq,
	isl,
	isr,
	ita,
	jam,
	jey,
	jor,
	jpn,
	kaz,
	ken,
	kgz,
	khm,
	kir,
	kna,
	kor,
	kwt,
	lao,
	lbn,
	lbr,
	lby,
	lca,
	lie,
	lka,
	lso,
	ltu,
	lux,
	lva,
	mac,
	maf,
	mar,
	mco,
	mda,
	mdg,
	mdv,
	mex,
	mhl,
	mkd,
	mli,
	mlt,
	mmr,
	mne,
	mng,
	mnp,
	moz,
	mrt,
	msr,
	mtq,
	mus,
	mwi,
	mys,
	myt,
	nam,
	ncl,
	ner,
	nfk,
	nga,
	nic,
	niu,
	nld,
	nor,
	npl,
	nru,
	nzl,
	omn,
	pak,
	pan,
	pcn,
	per,
	phl,
	plw,
	png,
	pol,
	pri,
	prk,
	prt,
	pry,
	pse,
	pyf,
	qat,
	reu,
	rou,
	rus,
	rwa,
	sau,
	sdn,
	sen,
	sgp,
	sgs,
	shn,
	sjm,
	slb,
	sle,
	slv,
	smr,
	som,
	spm,
	srb,
	ssd,
	stp,
	sur,
	svk,
	svn,
	swe,
	swz,
	sxm,
	syc,
	syr,
	tca,
	tcd,
	tgo,
	tha,
	tjk,
	tkl,
	tkm,
	tls,
	ton,
	tto,
	tun,
	tur,
	tuv,
	twn,
	tza,
	uga,
	ukr,
	umi,
	ury,
	usa,
	uzb,
	vat,
	vct,
	ven,
	vgb,
	vir,
	vnm,
	vut,
	wlf,
	wsm,
	yem,
	zaf,
	zmb,
	zwe
};
