import { IProvider } from './../../types/IProvider.d';
import { OpSearchService } from './../../services/op-search.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  public searchText: string;
  public selectedProvider: IProvider;
  constructor(private opSearchService: OpSearchService) { }

  ngOnInit() {
    this.selectedProvider = this.opSearchService.getProvider('stackoverflow');
  }

  searchCommand($event: any): void {
    this.opSearchService.search(this.selectedProvider, this.searchText);
  }

}
